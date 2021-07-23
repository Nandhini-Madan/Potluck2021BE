import React, { useState ,useEffect} from 'react'
// import { Route, Link, useHistory } from "react-router-dom";
import axiosWithAuth from '../utils/axiosWithAuth'
import * as yup from "yup";
// import axios from "axios";

import { useHistory } from 'react-router-dom'


    

const formSchema = yup.object().shape({
    emailId: yup.string().email("Must be a valid email address.").required("Must include email address."),
    password: yup.string().required("Password is Required"),
});
 
const Login = () => {
const history = useHistory();
    const [formState, setFormState] = useState({
        emailId: "",
        password:""
  });

    const [errors, setErrors] = useState({
         
        emailId: "",
        password:""
  });

    useEffect(() => {
    
  }, [formState]);


  const formSubmit = e => {
      console.log(formSubmit)
    e.preventDefault();
axiosWithAuth().post('/login',formState)
.then((response) => console.log(response))
.catch((err) => console.log(err));
    history.push("/dashboard")
        setFormState({
          emailId: "",
          password:""
        });
  };


  const validateChange = e => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };


  const inputChange = e => {
    e.persist();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value});
    validateChange(e);
  };




    return (
        
    <form className='add-form' onSubmit={formSubmit}>
    <h3>Log in</h3>
    <div className='form-control'>
    
    <div className='form-control'>
      <label htmlFor='email'>
        Email
        <input
          type='text'
          name='emailId'
          value={formState.emailId}
          onChange={inputChange}
        />
        {errors.emailId.length > 0 ? (
          <p className='error'>{errors.emailId}</p>
        ) : null}
      </label>

  <label htmlFor='password'>
        Password
        <input
          type='password'
          name='password'
          value={formState.password}
          onChange={inputChange}
        />
        {errors.password.length > 0 ? (
          <p className='error'>{errors.password}</p>
        ) : null}
      </label>
     </div>
      <button onClick={() => history.push("/dashboard")}> Login </button>
     
    <div className="click" onClick={() => history.push("/signup")}>Ragister</div> 
 </div>
    </form>
    





    )
}

export default Login
