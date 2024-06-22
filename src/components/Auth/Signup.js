import "./Signup.css"
import axios from "axios";
import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";


const Register = () => {

  const [values, setValues] = useState({
    firstName: "",
    password: "",
    email: ""
  });
  const navigate=useNavigate();


  const handleInputChange = (event) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.password && values.email) {
      setValid(true);
      axios.post("http://localhost:9000/Signup.php",values).then(
        (res)=>{
          if(res){
            navigate('/Login');
          }
          else{
            alert("incorrect signup!");
          }
          }
      ).catch((err)=>{console.log(err)});
    }
    setSubmitted(true);
  };



  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              Welcome {values.firstName}{" "}
            </h3>
            <div> Your registration was successful! </div>
          </div>
        )}
        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.password && (
          <span id="password-error">Please enter a password</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}
        {!valid && (
          <button class="form-field" type="submit">
            Register
          </button>
        )}
      </form>
    <span className="linker-span">already have account <Link className="linker" to="/Login">Login</Link></span>

    </div>

  )
}

export default Register