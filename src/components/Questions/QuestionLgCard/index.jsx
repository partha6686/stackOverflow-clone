import React from "react";
import styles from "./QuestionLgCard.module.css";
import BubbleTag from "../../shared/BubbleTag";
import { Link } from "react-router-dom";
import UpVoteBtn from "../../shared/UpVoteBtn";
import { IoIosBookmark } from "react-icons/io";
import { LiaComment } from "react-icons/lia";
import { PiShareFatLight } from "react-icons/pi";
import { numberService } from "../../../services/numberService";
import moment from "moment";
import parse from 'html-react-parser';

const QuestionLgCard = ({question}) => {
  const body =
    "<p>Iam running the latest OSX/Flutter/XCode Versions using flutter, android studio and firebase and 1 hour ago everthing works perfectly.</p> <p>Then i rebooted my macbook and when i try to launch an ios simulator i get this error &quot;Unable to boot the simulator&quot;.</p> <p>The following steps shows no solution:</p> <ol> <li>Reinstall the ios simulator</li> <li>Flutter clean and pub get</li> <li>Updating comand line tools 13.3.1 (13E500a)</li> <li>Run invalid cache of android studio</li> </ol> <p>I found the problem also on stackoverflow but all sugestions does not working.</p> <p>Any ideas?</p> ";
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.card_title_div}>
          <h3 className={styles.card_title}>
            {question?.title}
          </h3>
          <UpVoteBtn num={numberService(question?.score)} />
        </div>
        <div className={styles.card_profile}>
          <div className={styles.profile_name}>
            <img
              className={styles.profile_pic}
              src={question?.owner?.profile_image}
              alt="profile-pic"
            />
            <p>{question?.owner?.display_name}</p>
            <BubbleTag text={numberService(question?.owner?.reputation)} size="lg" />
          </div>
          <div className={styles.profile_desc}>
            <p>Asked {moment(question?.creation_date).startOf("seconds").fromNow()}</p>
            <div className={styles.VR} />
            <p>Active {moment(question?.last_activity_date).startOf("seconds").fromNow()}</p>
            <div className={styles.VR} />
            <p>Viewed {numberService(question?.view_count)} times</p>
          </div>
        </div>
      </div>
      <div className={styles.card_body}>
        <div>
        {parse(question?.body)}
        </div>
      </div>
      <div className={styles.card_footer}>
        <div className={styles.footer_left}>
            <IoIosBookmark size={36} color="#f48024" />
            <span>{question?.answer_count}</span>
        </div>
        <div className={styles.footer_right}>
            <PiShareFatLight size={36} />
            <LiaComment size={36} />
        </div>
      </div>
    </div>
  );
};

export default QuestionLgCard;
