import React, { useState } from "react";
import "../styles/App.css";
import { signUpFormValidation } from "../utils/validation";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  return (
    <>
      <form
        onSubmit={(e) => {
          // console.log(name);
          let obj = {
            name: name,
            email: email,
            password: password,
            consent: consent
          };

          e.preventDefault();
          setErrors(signUpFormValidation(obj));
          //console.log(errors);
        }}
      >
        <div>
          <label>
            Name
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </label>
          <p>{errors.name ? errors.name : null}</p>
        </div>
        <div>
          <label>
            Email
            <input
              type="text"
              value={email}
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </label>
          <p>{errors.email ? errors.email : null}</p>
        </div>
        <div>
          <label>
            Password
            <input
              type="PassWord"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </label>
          <p>{errors.password ? errors.password : null}</p>
        </div>
        <div>
          <label>
            Consent
            <input
              type="checkbox"
              id="consent"
              required
              onChange={() => {
                setConsent(!consent);
              }}
            ></input>
          </label>
          {/* <p>{!consent ? "Checkbox not selected" : null}</p> */}
        </div>
        <button type="submit">SignUp</button>
      </form>
    </>
  );
};

export default App;
