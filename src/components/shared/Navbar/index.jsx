import React from "react";
import styles from "./Navbar.module.css";
import StackLogo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import SideBar from "../SideBar";

const Navbar = () => {
  return (
    <>
      <section className={styles.navbar_wrapper}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src={StackLogo} alt="stack-overflow-logo" />
          </div>
          <div className={styles.search_wrapper}>
            <AiOutlineSearch className={styles.search_icon} size={20} />
            <input
              className={styles.search_input}
              placeholder="Search"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className={styles.menu}>
            <Link to="/">About</Link>
            <Link to="/">Product</Link>
            <Link to="/">For teams</Link>
          </div>
          <AiOutlineMenu className={styles.menu_bar} size={20} />
        </div>
      </section>
      <SideBar />
    </>
  );
};

export default Navbar;
