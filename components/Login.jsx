import { useState } from "react";
// import axios from 'axios';
// import "./login_register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);
    alert('hi');
    
    // const postData = { username, password };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: username,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/login", requestOptions, {mode: 'no-cors'})
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return props.trigger ? (
    <div className="outer_div">
      <div className="form_wrapper">
        <FontAwesomeIcon
          icon={faTimesCircle}
          id="close"
          onClick={() => props.setTrigger(false)}
        />
        <form className="form_cont" onSubmit={submitForm}>
          <label htmlFor="username" className="label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="user_name"
            className="inp_i"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="lname" className="label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="inp_i"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="" className="forgot_password">
            Forgot Password?
          </a>
          {/* <button className="btn" id="log_in"> */}
          <button type="submit" className="btn" id="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Login;
