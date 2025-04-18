import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

function Login() {
    const[showPassword, setShowPassword]= useState(false);

    const loginSchema = Yup.object({
        email: Yup.string().email('Invalid email').required("Email requried"),
        password: Yup.string().required("Password requried"),
    });
  return (
  
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div>
            <h3 className="text-center">Login</h3>
            <Formik
              initialValues={{}}
              validationSchema={loginSchema}
              onSubmit={()=>{
                alert('Logged in successful')
              }}
            >
                <Form>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    <div>
                       <label>Password</label> 
                       <div className="input-group">
                        <input type={showPassword ? 'text' : 'password'}
                        name='password'
                        className="form-control" />

                        <button type="button" className=" btn btn-outline-secondary" onClick={()=>
                            setShowPassword(!showPassword)}
                            >{showPassword ? 'Hide' : 'show'}</button>
                            </div>
                            <ErrorMessage name="password" component="div" className="text-danger" />
                        </div>
                        
                        <div  className="mt-3">
                        <button type="submit" className="btn btn-success" >Signup</button> 
                        </div>

                        {/* <div className="">
                            Already have an account ? <Link to="/">Login</Link>
                        </div> */}
                
                </Form>
                </Formik>
        </div>
      
    </div>
    
  );
}

export default Login; 
