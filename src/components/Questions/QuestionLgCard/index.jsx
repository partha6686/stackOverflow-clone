import React from "react";
import styles from "./QuestionLgCard.module.css";
import BubbleTag from "../../shared/BubbleTag";
import { Link } from "react-router-dom";
import UpVoteBtn from "../../shared/UpVoteBtn";
import { IoIosBookmark } from "react-icons/io";
import { LiaComment } from "react-icons/lia";
import { PiShareFatLight } from "react-icons/pi";

const QuestionLgCard = () => {
  const body =
    "<p>Iam running the latest OSX/Flutter/XCode Versions using flutter, android studio and firebase and 1 hour ago everthing works perfectly.</p> <p>Then i rebooted my macbook and when i try to launch an ios simulator i get this error &quot;Unable to boot the simulator&quot;.</p> <p>The following steps shows no solution:</p> <ol> <li>Reinstall the ios simulator</li> <li>Flutter clean and pub get</li> <li>Updating comand line tools 13.3.1 (13E500a)</li> <li>Run invalid cache of android studio</li> </ol> <p>I found the problem also on stackoverflow but all sugestions does not working.</p> <p>Any ideas?</p> ";
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.card_title_div}>
          <h3 className={styles.card_title}>
            Flutter: XCode error &quot;Unable to boot the Simulator&quot;
          </h3>
          <UpVoteBtn num={102} />
        </div>
        <div className={styles.card_profile}>
          <div className={styles.profile_name}>
            <img
              className={styles.profile_pic}
              src="https://www.gravatar.com/avatar/784a570374d05695178c2617b3f1b550?s=256&d=identicon&r=PG"
              alt="profile-pic"
            />
            <p>Partha Sarathi</p>
            <BubbleTag text={"230"} size="lg" />
          </div>
          <div className={styles.profile_desc}>
            <p>Asked 2 years, 1 month ago</p>
            <div className={styles.VR} />
            <p>Active 20 days ago</p>
            <div className={styles.VR} />
            <p>Viewed 200k times</p>
          </div>
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

export default QuestionLgCard;
