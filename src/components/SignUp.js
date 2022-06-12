import React from 'react';
import {useState} from 'react';

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div>
      <input type="checkbox" id="consent" checked={isChecked}   onChange={checkHandler} />
       <label htmlFor="checkbox">I agree to Terms of Service </label> 
     {/* <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p> */}
    </div>
  )
}

 function SignUp () {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [checkbox, setcheckbox] = useState(true);
  const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};
// Showing success message
const successMessage = () => {
  return (
  <div
  className="success"
  style={{
  display: submitted ? '' : 'none',
  }}>
  <h1>User {name} successfully registered!!</h1>
  </div>
  );
  };
  
  // Showing error message if error is true
  const errorMessage = () => {
  return (
  <div
  className="error"
  style={{
  display: error ? '' : 'none',
  }}>
  <h1>Please enter all the fields</h1>
  </div>
  );
  };
  
  return (
    <div className="form">
    <div>
    <h1>Signup Form</h1>
    </div>
    
    {/* Calling to the methods */}
    <div className="messages">
    {errorMessage()}
    {successMessage()}
    </div>
    
    <form>
    {/* Labels and inputs for form data */}
    <label className="label">Name</label>
    <input onChange={handleName} className="input"
    value={name} type="text" id="name"/>
    <br></br>
    <br></br>
    <label className="label">Email</label>
    <input onChange={handleEmail} className="input"
    value={email} type="email" id="email"/>
     <br></br>
    <br></br>
    <label className="label">Password</label>
    <input onChange={handlePassword} className="input"
    value={password} type="password" id="password"/>
     <br></br>
    <br></br>
    <Checkbox />
    <button onClick={handleSubmit} className="btn" type="submit">
    Signup
    </button>
    </form>
    </div>
  )
}

// function Welcome(){
//   return (<h1>Hey</h1>);
// }
 export default SignUp;
