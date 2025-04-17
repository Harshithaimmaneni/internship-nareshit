import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const signupSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().min(6, 'Min 6 characters').required('Password required'),
  });

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-38 col-lg-16 border p-5 shadow rounded bg-white">
        <h3 className="text-center mb-4">Signup</h3>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            alert('Signed up:\n' + JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className="mb-3">
              <label>Name</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <div className="input-group">
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-success w-100">Signup</button>

            <div className="mt-3 text-center">
              Already have an account? <Link to="/Login">Login</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
