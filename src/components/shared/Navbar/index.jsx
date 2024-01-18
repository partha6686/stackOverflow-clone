import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import StackLogo from "../../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import SideBar from "../SideBar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [searchVal, setSearchVal] = useState("");
  let location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e)=>{
    e.preventDefault();
    navigate(`/questions?search=${searchVal}`);
  }

  useEffect(() => {
    setShowSideBar(true);
  }, [location])
  

  return (
    <>
      <section className={styles.navbar_wrapper}>
        <div className={styles.navbar}>
          <Link to={"/"} className={styles.logo}>
            <img src={StackLogo} alt="stack-overflow-logo" />
          </Link>
          <div className={styles.search_wrapper}>
            <AiOutlineSearch className={styles.search_icon} size={20} />
            <form onSubmit={handleSearch}>
              <input
                className={styles.search_input}
                placeholder="Search"
                type="text"
                name="search"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
            </form>
          </div>
          <div className={styles.menu}>
            <Link to="/">About</Link>
            <Link to="/">Product</Link>
            <Link to="/">For teams</Link>
          </div>
          <AiOutlineMenu
            className={styles.menu_bar}
            size={20}
            onClick={() => setShowSideBar(!showSideBar)}
          />
        </div>
      </section>
      <SideBar showSideBar={showSideBar} />
    </>
  );
};

export default Navbar;
