import React from "react";
import { GoDotFill as Dot } from "react-icons/go";
import styles from "./FaqHead.module.scss";

export default function FaqHead() {
  return (
    <div>
      <section className={styles.container}>
        <h1 className={styles.heading}>
          Why should I choose Digital Aided School ?
        </h1>
        <div className={styles.wrapper}>
          <div className={styles.footer_text}>
            <ul>
              <li>
                <Dot className={styles.check} />
                Multiple Batches, hence time flexibility
              </li>
              <li>
                <Dot className={styles.check} />
                Guaranteed placement opportunities
              </li>
              <li>
                <Dot className={styles.check} />
                Interview mentorship
              </li>
            </ul>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ul>
              <li>
                <Dot className={styles.check} />
                Study First Pay Later program
              </li>
              <li>
                <Dot className={styles.check} />
                Real-life industry-level project experience
              </li>
              <li>
                <Dot className={styles.check} />
                World-Class experienced faculty
              </li>
            </ul>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ul>
              <li>
                <Dot className={styles.check} />
                Scholarship options
              </li>
              <li>
                <Dot className={styles.check} />
                Portfolio and profile mentorship
              </li>
              <li>
                <Dot className={styles.check} />
                Valuable Certificate
              </li>
            </ul>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </section>
    </div>
  );
}
