import React from "react";
import styles from "./Section.module.css";
import QuestionSmCard from "../../Questions/QuestionSmCard";

const Section = () => {
  return (
    <div>
      <div className={styles.header}>
        <h2>All Questions</h2>
        <button>Ask Question</button>
      </div>
      <QuestionSmCard />
    </div>
  );
};

export default Section;
