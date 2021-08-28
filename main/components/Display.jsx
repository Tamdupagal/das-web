import { useState, useEffect } from "react";
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Display = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/data", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setData((result));
        // alert('data is here')
      })
      .catch((error) => console.log("error", error));
  }, []);

    // var object = JSON.parse(data)
    // var result = [];
    // for(var i in object){
    //   result.push(object[i]) 
    // } 
  // function submitForm(e) {
  //   e.preventDefault();

  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:4000/api/data", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       setData(result.j);
  //       // alert('data is here')
  //     })
  //     .catch((error) => console.log("error", error));
  //   //
  // }

  return (
    // <div className="outer_div1">
    //   <div id="register">
    //     <FontAwesomeIcon
    //       icon={faTimesCircle}
    //       id="close"
    //       onClick={() => props.setTrigger(false)}
    //     />
    //     <form id="register_form">
    //       <h1>data is here</h1>
    //       {
    //           (data != "") ? <p>{data}</p> : <p>Data is not here</p>
    //       }
    //     </form>
    //   </div>
    // </div>
    <div>
    
      {/* {data.map((DBdata)=>{
        <p>{DBdata.email}</p>
      })} */}
      <h3>{data}</h3>
    </div>
  ) 
};

export default Display;
