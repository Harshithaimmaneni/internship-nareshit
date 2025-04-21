import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const loginSchema = Yup.object({
    email: Yup.string().email('Invalid email').required("Email required"),
    password: Yup.string().required("Password required"),
  });

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 shadow rounded bg-white" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            alert('Logged in successfully');
            navigate('/Home');
          }}
        >
          <Form>
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

            <div className="mt-3">
              <button type="submit" className="btn btn-success w-100">Login</button>
            </div>

            <div className="mt-3 text-center">
              Don't have an account? <Link to="/">Signup</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
