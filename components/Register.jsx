import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {useRouter} from 'next/router'
import baseUrl from "../helpers/Baseurl";

const Register = (props) => {
  const [fname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setNumber] = useState("");
  const [course, setCourse] = useState("Digital Marketing");
  const router = useRouter()

  const close= () => {           // Close the form after 400ms after form submition process is completed
    setTimeout( () => {
      props.setTrigger(false)
    }, 400);
  }

  function submitForm(e) {
    e.preventDefault();
    // console.log(fullname);
    // console.log(email);
    // console.log(number);
    // console.log(course);


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fname: fname,
      email: email,
      phone: phone,
      course: course
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };


    fetch(`${baseUrl}/api/signup`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => console.log("error", error));

    setFullname('');
    setEmail('');
    setNumber('');
    setCourse('');
    close();
  }

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
            value={fname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <br />
          <label htmlFor="email" className="label">
            Email:
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
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
            name="phone"
            min="1000000000"
            max="9999999999"
            className="inp_i"
            value={phone}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <br />
          <label htmlFor="course" className="label">
            Course:
          </label>
          <br />
          <select name="course" className="inp_i" value = {course} onChange={(e) => setCourse(e.target.value)}>
            <option value="Digital Marketing" id="option">Digital Marketing</option>
            <option value="Full Stack Web Developer" id="option">Full Stack Web Development</option>
            <option value="Data Science" id="option">Data Science</option>
          </select>
          <button type="submit" className="btn" id="submit" >
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
