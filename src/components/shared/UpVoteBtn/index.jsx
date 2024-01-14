import React from 'react'
import styles from "./UpVoteBtn.module.css"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const UpVoteBtn = ({num}) => {
  return (
    <div className={styles.btn}>
        <div className={styles.btn_left}>
            <AiOutlineMinus size={22} />
        </div>
        <div className={styles.btn_text}>
            {num}
        </div>
        <div className={styles.btn_right}>
            <AiOutlinePlus size={22}/>
        </div>
    </div>
  )
}

export default UpVoteBtn