import { useState } from "react";
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {useRouter} from 'next/router'

const Register = (props) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const router = useRouter()

  // const[fullNameErr, setFullNameErr] = useState('');

  function submitForm(e) {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(number);


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      // fullName: fullname,
      // email_id: email,
      // password: number,
      fname: fullname,
      email_id: email,
      mobile: number,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/sendmail", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => console.log("error", error));


      fetch("http://localhost:3000/api/register", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => console.log("error", error));

    
  }

  // const formValidation= () => {
  //   const fullNameErr = {};
  //   let isValid = true;

  //   if (fullname.trim().length < 5){
  //     fullNameErr.fullNameShort = "Full Name is too short";
  //     isValid = false;
  //   }

  //   if (fullname.trim().length > 20){
  //     fullNameErr.fullNameLong = "Full Name is too long";
  //     isValid = false;
  //   }

  //   if (fullname.includes("1")){
  //     fullNameErr.fullNameRegex = "Full Name cannot contain numbers or special characters";
  //     isValid = false;
  //   }

  //   setFullNameErr(fullNameErr);
  //   return isValid;
  // }

  return props.trigger ? (
    <div className="outer_div">
      <div id="register">
        <FontAwesomeIcon
          icon={faTimesCircle}
          id="close"
          onClick={() => props.setTrigger(false)}
        />
        <form id="register_form" onSubmit={submitForm}>
          <label htmlFor="fname" className="label">
            Full name:
          </label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            className="inp_i"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          {/* {Object.keys(fullNameErr).map( (key) => {
          return <p style={{ color:"red" }}>{fullNameErr[key]}</p>
        } )} */}
          <br />
          <label htmlFor="email" className="label">
            Email:
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email_id"
            className="inp_i"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="number" className="label">
            Mobile No.:
          </label>
          <br />
          <input
            type="number"
            id="number"
            name="mobile"
            min="1000000000"
            max="9999999999"
            className="inp_i"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <br />
          <button type="submit" className="btn" id="submit" onClick={()=>router.push('/')}>
            Submit
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Register;
