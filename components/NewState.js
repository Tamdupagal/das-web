import React, { useState, useEffect } from "react";

function NewState() {
  const [text, setText] = useState("Initial Text");

  // An array of text to cycle through
  const textOptions = [
    "We are Building something",
    "We are Building cooking",
    "We are Building creating",
    "We are Building developing ",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      // Choose a random text option from the array
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setText(textOptions[randomIndex]);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "white",
      }}
      className="changetextto"
    >
      <h1>{text}</h1>
    </div>
  );
}

export default NewState;
