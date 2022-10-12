import { useState } from "react";
// import axios from 'axios';
// import "./login_register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {useRouter} from 'next/router'
import baseUrl from '../helpers/Baseurl'

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrormessage] = useState(false)
  const router = useRouter()

  const close= () => {
    setTimeout( () => {
      props.setTrigger(false)
    }, 400);
  }

  function submitForm(e) {
    e.preventDefault();
    // console.log(username);
    // console.log(password);
    
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

    fetch(`${baseUrl}/api/login`, requestOptions, {mode: 'no-cors'})
      .then((response) => response.json())
      .then((result) => {
      console.log(result)
      //   if(result){
      //     router.push("/");
      //   }
      //   else{
      //     alert("Please Enter the correct credentials !");
      //   }
      })
      .catch((error) => console.log("error", error));


    // The below 3 lines should be put in if block inside the fetch component when it is verified 
    setUsername(''); 
    setPassword('');
    close(); 
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
            required
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
            required
          />
          <a href="" className="forgot_password">
            Forgot Password?
          </a>
          {/* {errorMessage ? <p id="errormsg"> Please enter correct details ! </p>: ""} */}
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
