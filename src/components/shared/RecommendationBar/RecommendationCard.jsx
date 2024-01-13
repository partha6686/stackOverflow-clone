import React from 'react';
import styles from './Recommendation.module.css';

const RecommendationCard = ({question, upVotes, title, selected}) => {
  return (
    <div className={styles.card}>
        <div className={!selected ? styles.upVotes: styles.upVotesSelected}>{upVotes}</div>
        <p className={styles.title}>{title}</p>
    </div>
  )
}

export default RecommendationCard