// import React from "react";
import FaqData from "./FaqData";
import { COURSE_DATA, COURSE_DATA2 } from "../helpers/Faq";
import styles from "./FaQuestion.module.scss";

function FaqQuestion() {
  return (
    <div
      className={styles.FaqQuestion}
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <div style={{ padding: "1rem", textAlign: "center", fontSize: "1.5rem" }}>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div
        className={styles.container}
        style={{
         
        }}
      >
        <section>
          {COURSE_DATA.map((item) => {
            return (
              <div className={styles.card} key={item.id}>
                <FaqData {...item} />
              </div>
            );
          })}
        </section>
        <section>
          {COURSE_DATA2.map((item) => {
            return (
              <div className={styles.card} key={item.id}>
                <FaqData {...item} />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default FaqQuestion;
