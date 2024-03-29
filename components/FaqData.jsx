import React from "react";
import styles from "./FaqData.module.scss";
import { GoDotFill as Dot } from "react-icons/go";
import Accordion from "./Accordion";

export default function FaqData(props) {
  return (
    <div>
      <div></div>
      <section className={styles.container}>
        <div className={styles.box}>
          <Accordion title={props.title} content={props.desc} />
        </div>
      </section>
    </div>
  );
}
