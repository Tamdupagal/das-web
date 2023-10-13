import { useState } from "react";
import styles from './Accordion.module.scss';
export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={ styles.head }>
     
    <details
      className={styles.container}
      style={{
        // width: "100%",
        marginBottom: "15px",
        lineHeight: "35px",
        border: "2px solid white",
        borderRadius: "8px",
        padding: "8px 8px 8px 20px",
        backgroundColor: "#fff",
      }}
    >
      <summary style={{ fontSize: "1.7rem" }}> {props.title}</summary>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#005778",
         
        }}
      >
        {props.content}
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#005778",
         
        }}
      >
        {props.content1}
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#005778",
         
        }}
      >
        {props.content2}
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#005778",
         
        }}
      >
        {props.content3}
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#005778",
         
        }}
      >
        {props.content4}
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#005778",
         
        }}
      >
        {props.content5}
      </p>
      </details>
      </div>
  );
}


