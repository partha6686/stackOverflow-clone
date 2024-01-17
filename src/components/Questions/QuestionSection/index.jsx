import React, { useEffect, useState } from "react";
import QuestionLgCard from "../QuestionLgCard";
import AnswersCard from "../AnswersCard";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import styles from "./QuestionSection.module.css";
import { getData } from "../../../services";
import Loader from "../../../assets/loader.svg";

const QuestionSection = () => {
  let { slug } = useParams();
  const { search } = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ message: "", type: false });
  const [ansLoading, setAnsLoading] = useState(false);

  const handleSortBy = async (val) => {
    searchParams.set("sort", val);
    setSearchParams(searchParams);
  };

  const handleFilter = async () => {
    try {
      setAnsLoading(true);
      const answersData = await getData(
        `questions/${slug}/answers?order=desc&sort=${
          searchParams.get("sort") ? searchParams.get("sort") : "activity"
        }&site=stackoverflow&filter=withbody`
      );
      if (answersData?.statusCode == 200) {
        setAnswers(answersData.items);
      } else {
        setError({
          message: answersData?.error_message,
          type: true,
        });
      }
    } catch (error) {
      setError({ message: "Some error occured", type: true });
    } finally {
      setAnsLoading(false);
    }
  };

  const getQuestionAnswers = async () => {
    try {
      setLoading(true);
      const questionData = await getData(
        `questions/${slug}?site=stackoverflow&filter=withbody`
      );
      const answersData = await getData(
        `questions/${slug}/answers?order=desc&sort=${
          searchParams.get("sort") ? searchParams.get("sort") : "activity"
        }&site=stackoverflow&filter=withbody`
      );
      if (questionData?.statusCode == 200 && answersData?.statusCode == 200) {
        setQuestion(questionData.items[0]);
        setAnswers(answersData.items);
      } else {
        setError({
          message: questionData?.error_message || answersData?.error_message,
          type: true,
        });
      }
    } catch (error) {
      setError({ message: "Some error occured", type: true });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search && handleFilter();
    return () => {
      setAnswers([]);
    };
  }, [search]);

  useEffect(() => {
    getQuestionAnswers();
    return () => {
      setQuestion({});
      setAnswers([]);
    };
  }, []);

  return (
    <div className={styles.qs_section}>
      {loading && (
        <div className={styles.loader}>
          <img src={Loader} alt="loading..." />
        </div>
      )}
      {!loading && (
        <>
          <QuestionLgCard question={question} />
          <div className={styles.filter_div}>
            <div className={styles.filter_num}>
              <p>{question.answer_count} Answers</p>
            </div>
            <div className={styles.filter_tab}>
              <p
                onClick={() => handleSortBy("votes")}
                className={
                  searchParams.get("sort") == "votes" &&
                  styles.filter_active_link
                }
              >
                Votes
              </p>
              <p
                onClick={() => handleSortBy("creation")}
                className={
                  searchParams.get("sort") == "creation" &&
                  styles.filter_active_link
                }
              >
                Newest
              </p>
              <p
                onClick={() => handleSortBy("activity")}
                className={
                  (searchParams.get("sort") == "activity" ||
                    !searchParams.get("sort")) &&
                  styles.filter_active_link
                }
              >
                Active
              </p>
            </div>
          </div>
          {ansLoading && (
            <div className={styles.loader}>
              <img src={Loader} alt="loading..." />
            </div>
          )}
          <div>
            {answers?.map((item) => (
              <AnswersCard key={item.answer_id} answer={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionSection;
