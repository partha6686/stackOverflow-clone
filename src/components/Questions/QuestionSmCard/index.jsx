import React from "react";
import styles from "./QuestionSmCard.module.css";

const QuestionSmCard = () => {
  return (
    <div className={styles.card}>
      <h3>subscripted value is neither array nor pointer nor vector (C).</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa maxime
        voluptatum quod sequi? Minus, perferendis similique! Deserunt, quo
        reprehenderit soluta animi...
      </p>
      <div className={styles.card_footer}>
        <img className={styles.profile_pic} src="https://www.gravatar.com/avatar/784a570374d05695178c2617b3f1b550?s=256&d=identicon&r=PG" alt="profile-pic" />
        <p>Partha Sarathi</p>
      </div>
    </div>
  );
};

export default QuestionSmCard;
