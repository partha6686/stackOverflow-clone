import React from "react";
import styles from "./Recommendation.module.css";
import { numberService } from "../../../services/numberService";
import { useNavigate } from "react-router-dom";

const RecommendationCard = ({ link, upVotes, title, selected }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.card}>
      <div className={!selected ? styles.upVotes : styles.upVotesSelected}>
        <span>{numberService(upVotes)}</span>
      </div>
      <p className={styles.title} onClick={()=>{navigate(link)}}>{title}</p>
    </div>
  );
};

export default RecommendationCard;
