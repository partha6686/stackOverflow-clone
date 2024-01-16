import React from "react";
import styles from "./AnswersCard.module.css";
import BubbleTag from "../../shared/BubbleTag";
import { Link } from "react-router-dom";
import UpVoteBtn from "../../shared/UpVoteBtn";
import { IoIosBookmark } from "react-icons/io";
import { LiaComment } from "react-icons/lia";
import { PiShareFatLight } from "react-icons/pi";

const AnswersCard = () => {
  const body =
    "<p>-v. Shows URLs of remote repositories when listing your current remote connections. By default, listing remote repositories only shows you their shortnames (e.g. &quot;origin&quot;). Using the &quot;-v&quot; option, you will also see the remote's URLs in listings.</p> <pre><code>git remote -v </code></pre>";

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.card_title_div}>
          <div>
            <p className={styles.card_title}>
              Autor: <span>javed (308)</span>
            </p>
            <p className={styles.card_title}>Answered: Dec 9, 2019 at 8:20</p>
          </div>
          <UpVoteBtn num={102} />
        </div>
      </div>
      <div className={styles.card_body}>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
      <div className={styles.card_footer}>
        <div className={styles.footer_left}>
          <IoIosBookmark size={36} color="#f48024" />
          <span>20</span>
        </div>
        <div className={styles.footer_right}>
          <PiShareFatLight size={36} />
          <LiaComment size={36} />
        </div>
      </div>
    </div>
  );
};

export default AnswersCard;
