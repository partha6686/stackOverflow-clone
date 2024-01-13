import React from 'react'
import styles from "./SideBar.module.css"
import { AiOutlineHome, AiOutlineGlobal, AiOutlineTeam, AiOutlineDown } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
      <div>
        <Link to="/" >
          <AiOutlineHome />
          <p>Home</p>
        </Link>
        <div>
        <AiOutlineGlobal />
        <p>Public</p>
        <AiOutlineDown />
        </div>
        <Link to="/" >
          <AiOutlineTeam />
          <p>Collectives</p>
        </Link>
        <Link to="/" >
        <AiOutlineGlobal />
          <p>Jobs</p>
        </Link>
      </div>
    </div>
  )
}

export default SideBar;