import React from "react";
import styles from "./Recommendation.module.css";
import RecommendationCard from "./RecommendationCard";

const RecommendationBar = () => {
  return (
    <div>
      <h2 className={styles.heading}>Linked</h2>
      <RecommendationCard
        upVotes={10}
        title={
          'Error while creating Angular Project" cannot be loaded because running scripts is disabled on this system."'
        }
        selected={false}
      />
      <RecommendationCard
        upVotes={10}
        title={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
        selected={true}
      />
      <RecommendationCard
        upVotes={10}
        title={
          'Error while creating Angular Project" cannot be loaded because running scripts is disabled on this system."'
        }
        selected={false}
      />
      <RecommendationCard
        upVotes={10}
        title={
          'Error while creating Angular Project" cannot be loaded because running scripts is disabled on this system."'
        }
        selected={false}
      />
      <RecommendationCard
        upVotes={10}
        title={
          'Error while creating Angular Project" cannot be loaded because running scripts is disabled on this system."'
        }
        selected={false}
      />

      <h2 className={styles.heading}>Related</h2>
      <RecommendationCard
        upVotes={10}
        title={
          'Error while creating Angular Project" cannot be loaded because running scripts is disabled on this system."'
        }
        selected={false}
      />
      <RecommendationCard
        upVotes={10}
        title={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
        selected={false}
      />
      <RecommendationCard
        upVotes={10}
        title={
          'Error while creating Angular Project" cannot be loaded because running scripts is disabled on this system."'
        }
        selected={true}
      />
      <RecommendationCard
        upVotes={10}
        title={
          'Error while creating Angular Project" cannot be loaded because running scripts is disabled on this system."'
        }
        selected={false}
      />
      <RecommendationCard
        upVotes={10}
        title={
          'Error while creating Angular Project" cannot be loaded because running scripts is disabled on this system."'
        }
        selected={true}
      />
    </div>
  );
};

export default RecommendationBar;
