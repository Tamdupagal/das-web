import { useState } from "react";
import styles from './Accordion.module.scss';
export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={styles.container}
      style={{
        width: "100%",
        marginBottom: "15px",
        lineHeight: "20px",
        border: "2px solid white",
        borderRadius:'8px',
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          fontSize:'2rem',
          color:'#005778',
          fontWeight:'500',
          padding: "8px",
          border: "none",
          backgroundColor: 'white',
          outline: "none",
          cursor: "pointer",
        }}
        onClick={toggle}
        type="button"
      >
        <p> {props.title}</p>
      </button>
      <div
        style={{ display: isShowing ? "block" : "none" ,fontSize: "1.5rem", color:'#fd7e14',padding: "15px"}}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}
