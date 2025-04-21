import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Form on the left */}
        <div className="col-md-5">
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
            onSubmit={(values, { resetForm }) => {
              if (editIndex !== null) {
                const updatedUsers = [...users];
                updatedUsers[editIndex] = values;
                setUsers(updatedUsers);
                setEditIndex(null);
              } else {
                setUsers([...users, values]);
              }
              resetForm();
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

        {/* Table on the right */}
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
                          document.querySelector('form').scrollIntoView({ behavior: 'smooth' }); // scroll to top
                          setTimeout(() => {
                            // trigger inside Formik's context
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
          onClick={() => {
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
