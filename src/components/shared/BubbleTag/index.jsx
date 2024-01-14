import React from "react";
import styles from "./BubbleTag.module.css";

const BubbleTag = ({ text, size }) => {
  return (
    <div className={size == "lg" ? styles.bubble_tag : styles.bubble_tag_sm}>
      {text}
    </div>
  );
};

export default BubbleTag;
