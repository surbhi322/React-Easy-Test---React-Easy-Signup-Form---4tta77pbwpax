import React, { useState } from "react";
import "../styles/App.css";
import { signUpFormValidation } from "../utils/validation";

const App = () => {
  const [error, setError] = useState({ name: "", email: "", password: "" });

  const validate = (event) => {
    event.preventDefault();

    const errors = signUpFormValidation({
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value,
    });
    if (errors == null) {
      setError({ name: "", email: "", password: "" });
    } else {
      setError(errors);
    }
  };

  return (
    <>
      <form onSubmit={validate}>
        <div>
          <label>
            Name :
            <input id="name" type="text" name="name" />
          </label>
          {error.name != null && error.name != "" ? error.name : null}
        </div>
        <br />
        <div>
          <label>
            Email :
            <input id="email" type="text" name="email" />
          </label>
          {error.email != null && error.email != "" ? error.email : null}
        </div>
        <br />
        <div>
          <label>
            Password :
            <input id="password" type="text" name="password" />
          </label>
          {error.password != null && error.password != ""
            ? error.password
            : null}
        </div>
        <br />
        <div>
          <label>
            Consent :
            <input id="consent" type="checkbox" name="consent" />
          </label>
        </div>
        <br />
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </>
  );
};

export default App;
