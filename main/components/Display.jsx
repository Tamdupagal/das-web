import { useState, useEffect } from "react";
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Display = (props) => {
  const [data, setData] = useState("no data");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/data", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setData(result);
        // alert('data is here')
      })
      .catch((error) => console.log("error", error));
  }, []);

  function submitForm(e) {
    e.preventDefault();

    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/data", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
        // alert('data is here')
      })
      .catch((error) => console.log("error", error));
    //
  }

  return props.trigger ? (
    <div className="outer_div1">
      <div id="register">
        <FontAwesomeIcon
          icon={faTimesCircle}
          id="close"
          onClick={() => props.setTrigger(false)}
        />
        <form id="register_form" onSubmit={submitForm}>
          <h1>data is here</h1>
          {
              (data != "") ? <p>{data}</p> : <p>Data is not here</p>
          }
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Display;
