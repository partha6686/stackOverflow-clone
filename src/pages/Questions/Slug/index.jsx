import React from 'react'
import styles from "./QuestionsSlug.module.css";
import RecommendationBar from "../../../components/shared/RecommendationBar";
import QuestionSection from '../../../components/Questions/QuestionSection';

const QuestionsSlug = () => {
  return (
    <div className={styles.questions_wrapper}>
    <div className={styles.section_wrapper}>
      <QuestionSection />
    </div>
    <div className={styles.rec_wrapper}>
      <RecommendationBar />
    </div>
  </div>
  )
}

export default QuestionsSlug