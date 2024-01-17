import React, { useEffect, useState } from "react";
import styles from "./Recommendation.module.css";
import RecommendationCard from "./RecommendationCard";
import { useParams } from "react-router-dom";
import { getData } from "../../../services";

const RecommendationBar = () => {
  let { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [linkedData, setLinkedData] = useState([]);
  const [relatedData, setRelatedData] = useState([]);
  const [error, setError] = useState({ message: "", type: false });

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log("HITT", slug);
      const data1 = await getData(
        `questions/${slug}/linked?order=desc&sort=activity&site=stackoverflow&pageSize=5`
      );
      const data2 = await getData(
        `questions/${slug}/related?order=desc&sort=rank&site=stackoverflow&pageSize=5`
      );
      console.log(data1, data2);
      setLinkedData(data1?.items);
      setRelatedData(data2?.items);
    } catch (error) {
      setError({ message: "Some error occured", type: true });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      setLinkedData([]);
      setRelatedData([]);
    };
  }, [slug]);

  return (
    <div>
      {!loading && (
        <>
          {linkedData?.length > 0 && (
            <div>
              <h2 className={styles.heading}>Linked</h2>
              {linkedData?.map((item) => (
                <RecommendationCard
                  key={item.question_id}
                  upVotes={item.score}
                  title={item.title}
                  link={`/questions/${item.question_id}`}
                  selected={item.is_answered}
                />
              ))}
            </div>
          )}

          {relatedData?.length>0 && (
            <div>
              <h2 className={styles.heading}>Related</h2>
              {relatedData?.map((item) => (
                <RecommendationCard
                  key={item.question_id}
                  upVotes={item.score}
                  title={item.title}
                  link={`/questions/${item.question_id}`}
                  selected={item.is_answered}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RecommendationBar;
