import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import QuestionSmCard from "../../Questions/QuestionSmCard";
import { Link, useSearchParams } from "react-router-dom";
import { getData } from "../../../services";

const Section = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [allQuestions, setAllQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesize, setPagesize] = useState(15);
  const [sortBy, setSortBy] = useState("creation");
  const [error, setError] = useState({ message: "", type: false });
  const [loading, setLoading] = useState(true);

  const getQuestions = async () => {
    try {
      setLoading(true);
      const data = await getData(
        `questions?page=${page}&pagesize=${pagesize}&order=desc&sort=${sortBy}&site=stackoverflow&filter=withbody`
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
      setError({ message: data?.message, type: true });
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
  }, [page, pagesize]);

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
            <Link to={"/"} className={styles.filter_active_link}>
              Votes
            </Link>
            <Link to={"/"}>Oldest</Link>
            <Link to={"/"}>Active</Link>
          </div>
        </div>
      </div>
      {allQuestions.map((item, idx) => (
        <QuestionSmCard />
      ))}
    </div>
  );
};

export default Section;
