import React, { useState } from 'react'
import baseUrl from "../../helpers/Baseurl"

export const getStaticPaths = async () => {

    const res = await fetch(`${baseUrl}/api/userdata`);
    const data = await res.json();

    const sids = data.map( student => {
        return {
            params: { id: student._id.toString() }
        }
    }) ;
    return {
        paths: sids,
        fallback : false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`${baseUrl}/api/userdata`+id);
    const std = await res.json();
    return {
        props : { student: std }
    }
}

const EditDetails = ( { student } ) => {

    const [fullName, setFullname] = useState(student[0].fullName);   
    const [email, setEmail] = useState(student[0].email);
    const [number, setNumber] = useState(student[0].phoneNumber);
    const [course, setCourse] = useState(student[0].course);
    const [disposition, setDisposition] = useState(student[0].disposition);

    async function submitForm(e){

      e.preventDefault();
      // console.log(fullName);
      // console.log(email);
      // console.log(number);
      // console.log(course);
      // console.log(disposition);
      // console.log(student[0]._id);

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

      const edit = await fetch(`${baseUrl}/api/userdata/${student[0]._id}`, requestOptions)
      console.log(edit);

      const editResponse = await edit.json();
      console.log(editResponse);
    
    }  
    
    return  (
        <div className="editdatadiv">
          <div id="editdatainnerdiv">
            {/* <FontAwesomeIcon
              icon={faTimesCircle}
              id="close"
              onClick={() => props.setTrigger(false)}
            /> */}
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
                value={ number}
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
    ) ;
}

export default EditDetails ;
