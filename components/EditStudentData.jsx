import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {useRouter} from 'next/router'
import baseUrl from '../helpers/Baseurl'

const EditStudentData = (props) => {

  // const [fullName, setFullname] = useState(props.student.fullName);      // To be used when we get student as whole
  // const [email, setEmail] = useState(props.student.email);
  // const [number, setNumber] = useState(props.student.phoneNumber);
  // const [course, setCourse] = useState(props.student.course);
  // const [disposition, setDisposition] = useState(props.student.disposition);

  const [fullName, setFullname] = useState("");           // To be used when we get student id as prop
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [course, setCourse] = useState("");
  const [disposition, setDisposition] = useState("");

  useEffect( async () => {                                // To be used when we get student id as prop

    console.log(props.student);
    const details = await fetch(`${baseUrl}/api/userdata/${props.student}`)
    console.log(details);
    const detail = await details.json() ;
    console.log(detail);
    console.log(detail[0].fullName)

    setFullname(detail[0].fullName)
    setEmail(detail[0].email);
    setNumber(detail[0].phoneNumber);
    setCourse(detail[0].course);
    setDisposition(detail[0].disposition);

  }, [props.trigger])

  const close= () => {                // Close the form after 400ms after form submition process is completed
    setTimeout( () => {
      props.setTrigger(false)
    }, 400);
  }
  
  async function submitForm(e){

    e.preventDefault();
    // console.log(fullName);
    // console.log(email);
    // console.log(number);
    // console.log(course);
    // console.log(disposition);
    // console.log(props.student._id);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fullName: fullName,
      email: email,
      phoneNumber: number,
      course: course,
      disposition: disposition
    })

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
    };

    const edit = await fetch(`${baseUrl}/api/userdata/${props.student._id}`, requestOptions)
    console.log(edit);

    const editResponse = await edit.json();
    console.log(editResponse);

    close(); 

  }  

  return props.trigger ? (
    <div className="editdatadiv">
      <div id="editdatainnerdiv">
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
            value={fullName}
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
          <label htmlFor="course" className="label">
            Course:
          </label>
          <br />
          <select
            name="course"
            className="inp_i"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="Digital Marketing" id="option">
              Digital Marketing
            </option>
            <option value="Full Stack Web Development" id="option">
              Full Stack Web Development
            </option>
            <option value="Data Science" id="option">
              Data Science
            </option>
          </select>
          <label htmlFor="disposition" className="label">
            Disposition:
          </label>
          <br />
          <select
            name="disposition"
            className="inp_i"
            value={ disposition }
            onChange={(e) => setDisposition(e.target.value)}
          >
            <option value="No Answer" id="option">  No Answer  </option>
            <option value="Callback" id="option">  Callback  </option>
            <option value="Not Intrested" id="option">  Not Intrested  </option>
            <option value="Enrolled">  Enrolled  </option>
          </select>
          <button type="submit" className="btn" id="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  ) : "";
};

export default EditStudentData;
