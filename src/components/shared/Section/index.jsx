import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import QuestionSmCard from "../../Questions/QuestionSmCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getData } from "../../../services";
import Loader from "../../../assets/loader.svg";
import ReactPaginate from "react-paginate";
import { numberService } from "../../../services/numberService";
import { toast } from "react-toastify";

const Section = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const [allQuestions, setAllQuestions] = useState([]);
  const [pagesize, setPagesize] = useState(15);
  const [page, setPage] = useState(1);
  const [error, setError] = useState({ message: "", type: false });
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(5);
  const [totQs, setTotQs] = useState(0);

  const handleSortBy = async (val) => {
    searchParams.set("sort", val);
    setSearchParams(searchParams);
  };

  const handlePageClick = async (e) => {
    setPage(e.selected + 1);
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
          message: data?.message,
          type: true,
        });
        toast(data?.message)
      }
    } catch (error) {
      setError({ message: "Some error occured", type: true });
      toast( "Some error occured")
    } finally {
      setLoading(false);
    }
  };

  const getSearchResults = async () => {
    try {
      setLoading(true);
      const data = await getData(
        `search/advanced?order=desc&sort=relevance&q=${searchParams.get(
          "search"
        )}&site=stackoverflow&filter=withbody`
      );
      if (data?.statusCode == 200) {
        setAllQuestions(data?.items);
      } else {
        setError({
          message: data?.message,
          type: true,
        });
        toast(data?.message)
      }
    } catch (error) {
      setError({ message: "Some error occured", type: true });
      toast("Some error occured")
    } finally {
      setLoading(false);
    }
  };

  const getInfo = async () => {
    try {
      const data = await getData(`info?site=stackoverflow`);
      if (data?.statusCode == 200) {
        setTotQs(data?.items[0]?.total_questions);
        setPageCount(Math.ceil(data?.items[0]?.total_questions / pageCount));
      } else {
        setError({
          message: data?.message,
          type: true,
        });
        toast(data?.message);
      }
    } catch (error) {
      setError({ message: "Some error occured", type: true });
      toast("Some error occured")
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    if (searchParams.get("search")) {
      getSearchResults();
    } else {
      getQuestions();
    }
    return () => {
      setAllQuestions([]);
    };
  }, [page, search]);

  return (
    <div>
      {!searchParams.get("search") && (
        <div className={styles.header_wrapper}>
          <div className={styles.header}>
            <h2>All Questions</h2>
            <button>Ask Question</button>
          </div>
          <div className={styles.filter_div}>
            <div className={styles.filter_num}>
              <p>{numberService(totQs, 0)} Questions</p>
            </div>
            <div className={styles.filter_tab}>
              <p
                onClick={() => handleSortBy("votes")}
                className={
                  searchParams.get("sort") == "votes"
                    ? styles.filter_active_link
                    : null
                }
              >
                Votes
              </p>
              <p
                onClick={() => handleSortBy("creation")}
                className={
                  searchParams.get("sort") == "creation"
                    ? styles.filter_active_link
                    : null
                }
              >
                Newest
              </p>
              <p
                onClick={() => handleSortBy("activity")}
                className={
                  searchParams.get("sort") == "activity" ||
                  !searchParams.get("sort")
                    ? styles.filter_active_link
                    : null
                }
              >
                Active
              </p>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className={styles.loader}>
          <img src={Loader} alt="loading..." />
        </div>
      )}
      {!loading &&
        allQuestions.map((item, idx) => (
          <QuestionSmCard key={item.question_id} question={item} />
        ))}
      {!searchParams.get("search") && (
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName={!loading ? "pagination": "pagination-hidden"}
          activeClassName="active"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
        />
      )}
    </div>
  );
};

export default Section;
