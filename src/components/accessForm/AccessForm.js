import { useState } from "react";
import AccessFormStyles from "./AccessFormStyles";

// Receive an error message when the form is submitted if:
// The Email address field is empty should show "Oops! Please add your email"
// The email is not formatted correctly should show "Oops! Please check your email"

const AccessForm = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");

  const checkEmail = (e) => {
    e.preventDefault();

    // source
    // https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs/39425165

    let checker =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "") {
      console.log("Oops! Please add your email");
      setError("Oops! Please add your email");
    }

    if (checker.test(email) === false) {
      console.log("Oops! Please check your email");
      setError("Oops! Please check your email");
    }

    if (checker.test(email) === true) {
      // not really gonna put anything here
    }

    setEmail("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <AccessFormStyles>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={handleEmail}
      />
      <button onClick={checkEmail}>Request Access</button>
      {error && <p class="error-message">{error}</p>}
    </AccessFormStyles>
  );
};

export default AccessForm;
