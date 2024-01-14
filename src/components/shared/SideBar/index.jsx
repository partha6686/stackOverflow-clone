import React, { useState } from "react";
import styles from "./SideBar.module.css";
import {
  AiOutlineHome,
  AiOutlineGlobal,
  AiOutlineTeam,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { useLocation, Link } from "react-router-dom";

const SideBar = ({showSideBar}) => {
  let location = useLocation();
  const [open, setOpen] = useState(true);
  console.log("location", location.pathname);
  return (
    <div className={!showSideBar ? styles.sidebar_wrapper: styles.hide_sidebar}>
      <div className={styles.sidebar}>
        <Link to="/" className={location.pathname == "/" ? styles.active_item : styles.sidebar_item}>
          <AiOutlineHome size={20} />
          <p>Home</p>
        </Link>
        <div className={styles.sidebar_item} onClick={() => setOpen(!open)}>
          <AiOutlineGlobal size={20} />
          <p>Public</p>
          {open ? <AiOutlineUp className={styles.icon_right} /> : <AiOutlineDown className={styles.icon_right} />}
        </div>
        {open && (
          <div className={styles.sidebar_internal}>
            <Link to="/questions" className={location.pathname.includes("/questions") ? styles.active_item: null}>
              <p>Questions</p>
            </Link>
            <Link to="/tags" className={location.pathname == "/tags" ? styles.active_item: null}>
              <p>Tags</p>
            </Link>
            <Link to="/users" className={location.pathname == "/users" ? styles.active_item: null}>
              <p>Users</p>
            </Link>
          </div>
        )}
        <Link to="/collectives" className={location.pathname == "/collectives" ? styles.active_item : styles.sidebar_item}>
          <AiOutlineTeam size={20} />
          <p>Collectives</p>
        </Link>
        <Link to="/jobs" className={location.pathname == "/jobs" ? styles.active_item : styles.sidebar_item}>
          <HiOutlineBriefcase size={20} />
          <p>Jobs</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
