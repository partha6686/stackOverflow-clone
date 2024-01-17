import React from "react";
import styles from "./QuestionSmCard.module.css";
import BubbleTag from "../../shared/BubbleTag";
import { Link } from "react-router-dom";
import { numberService } from "../../../services/numberService";
import moment from "moment";
import parse from 'html-react-parser';

const QuestionSmCard = ({ question }) => {
  return (
    <div className={styles.card}>
      <Link
        to={`/questions/${question?.question_id}`}
        className={styles.card_title}
      >
        {question?.title}
      </Link>
      <div className={styles.card_desc}>{parse(question?.body?question?.body: '')}</div>
      <div className={styles.card_tags}>
        {question?.tags?.map((item, idx) =>
          idx < 3 ? <BubbleTag key={idx} text={item} size="sm" /> : null
        )}
        {question?.tags?.length > 3 && (
          <BubbleTag text={`+${question.tags.length - 3} more`} size="sm" />
        )}
      </div>
      <div className={styles.card_footer}>
        <div className={styles.footer_name}>
          <img
            className={styles.profile_pic}
            src={question?.owner?.profile_image}
            alt="profile-pic"
          />
          <p>{question?.owner?.display_name}</p>
          <BubbleTag
            text={numberService(question?.owner?.reputation)}
            size="lg"
          />
        </div>
        <div className={styles.footer_desc}>
          <p>
            Asked {moment(question?.creation_date).startOf("seconds").fromNow()}{" "}
          </p>
          <p>
            Active{" "}
            {moment(question?.last_activity_date).startOf("seconds").fromNow()}
          </p>
          <p>Viewed {numberService(question?.view_count)} times</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionSmCard;
