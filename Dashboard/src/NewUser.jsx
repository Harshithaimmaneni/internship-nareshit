import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function UserForm() {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const userSchema = Yup.object({
    username: Yup.string().required('Username required'),
    password: Yup.string().required('Password required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone must be 10 digits')
      .required('Phone number required'),
    gender: Yup.string().required('Gender required'),
    dob: Yup.date().required('Date of birth required'),
  });

  // Fetch users initially
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 ms-auto">
          <h4>{editIndex !== null ? 'Edit User' : 'Register User'}</h4>
          <Formik
            initialValues={{
              username: '',
              password: '',
              phone: '',
              gender: '',
              dob: '',
            }}
            validationSchema={userSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                if (editIndex !== null) {
                  const userId = users[editIndex]._id;
                  await axios.put(`http://localhost:5000/api/users/${userId}`, values);
                  const updatedUsers = [...users];
                  updatedUsers[editIndex] = { ...values, _id: userId };
                  setUsers(updatedUsers);
                  setEditIndex(null);
                } else {
                  const response = await axios.post('http://localhost:5000/api/users', values);
                  setUsers([...users, response.data]);
                }
                resetForm();
              } catch (error) {
                console.error('Error submitting form:', error);
              }
            }}
          >
            {({ setValues }) => (
              <Form>
                <div className="mb-2">
                  <label>Username</label>
                  <Field name="username" className="form-control" />
                  <ErrorMessage name="username" className="text-danger" component="div" />
                </div>
                <div className="mb-2">
                  <label>Password</label>
                  <Field name="password" type="password" className="form-control" />
                  <ErrorMessage name="password" className="text-danger" component="div" />
                </div>
                <div className="mb-2">
                  <label>Phone</label>
                  <Field name="phone" className="form-control" />
                  <ErrorMessage name="phone" className="text-danger" component="div" />
                </div>
                <div className="mb-2">
                  <label>Gender</label>
                  <Field as="select" name="gender" className="form-select">
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Field>
                  <ErrorMessage name="gender" className="text-danger" component="div" />
                </div>
                <div className="mb-2">
                  <label>Date of Birth</label>
                  <Field name="dob" type="date" className="form-control" />
                  <ErrorMessage name="dob" className="text-danger" component="div" />
                </div>
                <button type="submit" className="btn btn-success w-100 mt-2">
                  {editIndex !== null ? 'Update' : 'Register'}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="col-md-7">
          <h4 className="mb-3">User Details</h4>
          {users.length === 0 ? (
            <p>No users added yet.</p>
          ) : (
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>{user.gender}</td>
                    <td>{user.dob}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => {
                          setEditIndex(index);
                          const formValues = {
                            username: user.username,
                            password: user.password,
                            phone: user.phone,
                            gender: user.gender,
                            dob: user.dob,
                          };
                          document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
                          setTimeout(() => {
                            const formik = document.querySelector('[name="username"]')?.closest('form').__formikProps;
                            if (formik) {
                              formik.setValues(formValues);
                            }
                          }, 0);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={async () => {
                          const userId = users[index]._id;
                          await axios.delete(`http://localhost:5000/api/users/${userId}`);
                          const updatedUsers = users.filter((_, i) => i !== index);
                          setUsers(updatedUsers);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserForm;
