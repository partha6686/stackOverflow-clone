import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import QuestionSmCard from "../../Questions/QuestionSmCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getData } from "../../../services";
import Loader from "../../../assets/loader.svg";

const Section = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const [allQuestions, setAllQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesize, setPagesize] = useState(15);
  const [error, setError] = useState({ message: "", type: false });
  const [loading, setLoading] = useState(true);

  const handleSortBy = async (val) => {
    searchParams.set("sort", val);
    setSearchParams(searchParams);
  };

  const getQuestions = async () => {
    try {
      setLoading(true);
      const data = await getData(
        `questions?page=${page}&pagesize=${pagesize}&order=desc&sort=${
          searchParams.get("sort") ? searchParams.get("sort") : "activity"
        }&site=stackoverflow&filter=withbody`
      );
      if (data?.statusCode == 200) {
        setAllQuestions(data?.items);
      } else {
        setError({
          message: data?.error_message,
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
    getQuestions();
    return () => {
      setAllQuestions([]);
      setPage(1);
      setPagesize(15);
    };
  }, [page, pagesize, search]);

  return (
    <div>
      <div className={styles.header_wrapper}>
        <div className={styles.header}>
          <h2>All Questions</h2>
          <button>Ask Question</button>
        </div>
        <div className={styles.filter_div}>
          <div className={styles.filter_num}>
            <p>20 Questions</p>
          </div>
          <div className={styles.filter_tab}>
            <p
              onClick={() => handleSortBy("votes")}
              className={
                searchParams.get("sort") == "votes" && styles.filter_active_link
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
      </div>
      {loading && (
        <div className={styles.loader}>
          <img
            src={Loader}
            alt="loading..."
            
          />
        </div>
      )}
      {!loading &&
        allQuestions.map((item, idx) => (
          <QuestionSmCard key={item.question_id} question={item} />
        ))}
    </div>
  );
};

export default Section;
