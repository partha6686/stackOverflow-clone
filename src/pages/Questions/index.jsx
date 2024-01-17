import React from "react";
import styles from "./Questions.module.css";
import RecommendationBar from "../../components/shared/RecommendationBar";
import Section from "../../components/shared/Section";

const Questions = () => {
  return (
    <div className={styles.questions_wrapper}>
      <div className={styles.section_wrapper}>
        <Section />
      </div>
      <div className={styles.rec_wrapper}>
        {/* <RecommendationBar /> */}
      </div>
    </div>
  );
};

export default Questions;
