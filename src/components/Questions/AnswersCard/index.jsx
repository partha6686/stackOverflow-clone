import React from "react";
import styles from "./AnswersCard.module.css";
import BubbleTag from "../../shared/BubbleTag";
import { Link } from "react-router-dom";
import UpVoteBtn from "../../shared/UpVoteBtn";
import { IoIosBookmark } from "react-icons/io";
import { LiaComment } from "react-icons/lia";
import { PiShareFatLight } from "react-icons/pi";
import { numberService } from "../../../services/numberService";
import moment from "moment";
import parse from 'html-react-parser';

const AnswersCard = ({answer}) => {
  const body =
    "<p>-v. Shows URLs of remote repositories when listing your current remote connections. By default, listing remote repositories only shows you their shortnames (e.g. &quot;origin&quot;). Using the &quot;-v&quot; option, you will also see the remote's URLs in listings.</p> <pre><code>git remote -v </code></pre>";

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.card_title_div}>
          <div>
            <p className={styles.card_title}>
              Autor: <span>{answer?.owner?.display_name} ({numberService(answer?.owner?.reputation)})</span>
            </p>
            <p className={styles.card_title}>Answered: {moment(answer?.creation_date).format("MMM Do YY [at] h:mm a" )}</p>
          </div>
          <UpVoteBtn num={numberService(answer?.score)} />
        </div>
      </div>
      <div className={styles.card_body}>
        <div>
        {parse(answer?.body)}
        </div>
      </div>
      <div className={styles.card_footer}>
        {/* <div className={styles.footer_left}>
        </div> */}
        <div className={styles.footer_right}>
          <PiShareFatLight size={36} />
          <LiaComment size={36} />
        </div>
      </div>
    </div>
  );
};

export default AnswersCard;
