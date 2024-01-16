import React from 'react'
import QuestionLgCard from '../QuestionLgCard'
import AnswersCard from '../AnswersCard'
import { Link } from 'react-router-dom'
import styles from './QuestionSection.module.css'

const QuestionSection = () => {
  return (
    <div className={styles.qs_section}>
        <QuestionLgCard />
        <div className={styles.filter_div}>
          <div className={styles.filter_num}>
            <p>20 Answers</p>
          </div>
          <div className={styles.filter_tab}>
            <Link to={"/"} className={styles.filter_active_link}>
              Votes
            </Link>
            <Link to={"/"} >
              Oldest
            </Link>
            <Link to={"/"} >
              Active
            </Link>
          </div>
        </div>


        <AnswersCard />
    </div>
  )
}

export default QuestionSection