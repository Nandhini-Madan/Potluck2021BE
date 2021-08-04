import React, { useState ,useEffect} from 'react'
// import { Route, Link, useHistory } from "react-router-dom";
import axiosWithAuth from '../utils/axiosWithAuth'
import * as yup from "yup";
import { Route, Link , useHistory} from "react-router-dom";


const formSchema = yup.object().shape({
    emailId: yup.string().email("Must be a valid email address.").required("Must include email address."),
    password: yup.string().required("Password is Required"),
});
 
const Login = (props) => {
const history = useHistory();
    const [formState, setFormState] = useState({
        emailId: "",
        password:""
  });

    const [errors, setErrors] = useState({
         
        emailId: "",
        password:""
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);


  const formSubmit = e => {
      console.log(formSubmit)
    e.preventDefault();
      axiosWithAuth().post('login',formState)
        .then((response) => {
      console.log(response);
        localStorage.setItem('token', response.data.token)
      
    })
        .catch((err) => console.log(err));
        setFormState({
          emailId: "",
          password:""
        });
        history.push("/dashboard")
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
    console.log(e)
    e.persist();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value});
    validateChange(e);
  };




    return (
        <Route> 
    <form className='add-form' onSubmit={formSubmit}>
    <h3>Welcome Back!</h3>
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
      <button type="submit"onClick={formSubmit}> Login </button>
     
    <div className="click" onClick={() => history.push("/signup")}>Ragister</div> 
 </div>
    </form>
    
</Route>




    )
}

export default Login
