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
        width: "100%",
        marginBottom: "15px",
        lineHeight: "20px",
        border: "2px solid white",
        borderRadius: "8px",
        padding: "8px",
      }}
    >
        <summary style={ { fontSize: "1.7rem" } }> { props.title }{ props.title}</summary>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#005778",
        }}
      >
        {props.content}
      </p>
      </details>
      </div>
  );
}


