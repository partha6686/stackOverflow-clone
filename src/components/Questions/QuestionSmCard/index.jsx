import React from "react";
import styles from "./QuestionSmCard.module.css";
import BubbleTag from "../../shared/BubbleTag";
import { Link } from "react-router-dom";

const QuestionSmCard = () => {
  return (
    <div className={styles.card}>
      <Link to={'/questions/778734'} className={styles.card_title}>subscripted value is neither array nor pointer nor vector (C).</Link>
      <p className={styles.card_desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa maxime
        voluptatum quod sequi? Minus, perferendis similique! Deserunt, quo
        reprehenderit soluta animi...
      </p>
      <div className={styles.card_tags}>
        <BubbleTag text={'React.js'} size='sm' />
        <BubbleTag text={'Next.js'} size='sm' />
        <BubbleTag text={'Node.js'} size='sm' />
        <BubbleTag text={'Express JS'} size='sm' />
        <BubbleTag text={'MongoDB'} size='sm' />
        <BubbleTag text={'+3 more'} size='sm' />
      </div>
      <div className={styles.card_footer}>
        <div className={styles.footer_name}>       
            <img className={styles.profile_pic} src="https://www.gravatar.com/avatar/784a570374d05695178c2617b3f1b550?s=256&d=identicon&r=PG" alt="profile-pic" />
            <p>Partha Sarathi</p>
            <BubbleTag text={'230'} size="lg"  />
        </div>
        <div className={styles.footer_desc}>
            <p>Asked 2 years, 1 month ago</p>
            <p>Active 20 days ago</p>
            <p>Viewed 200k times</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionSmCard;
