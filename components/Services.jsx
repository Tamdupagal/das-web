import React, { useState } from "react";
import styles from "./Services.module.scss";
import SectionHeader from "./SectionHeader";
import FeatureDetails from "./FeatureDetails";
import { GoDotFill as Dot } from "react-icons/go";

function Services({ data, className }) {
  return (
    <section className={styles.container}>
      <div className={styles.content__box}>
        <div className={styles.service__header}>
          <SectionHeader
            slogan="OBJECTIVES"
            text="Empower Yourself for the AI-Driven Future
Master Generative AI for Real-World Problem Solving
Build a Strong Foundation in AI Innovation
"
          />
          <div className={styles.sec}>
            <div className={styles.divi}>
              <h5>Mastering AI Tools & Techniques</h5>
              <li>Create Solutions Beyond Coding</li>
              <li>Creative & Problem solving skills.</li>
            </div>
            <div className={styles.divi}>
              <h5>Structured Curriculum</h5>
              <li>Build AI-Powered Solutions</li>
              <li>From Concept to Implementation</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
