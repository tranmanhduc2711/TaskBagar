import React from 'react'
import { BsPlusLg, BsFillBellFill,BsSearch } from "react-icons/bs";
import './header.scss';
export default function Header() {
  return (
    <>
      <div className="header d-flex-row">
        <div className="d-flex-row content-wrap">
          <div className="header-name">
            <h2>TaskBagar</h2>
          </div>
          <div className="header-search">
            <BsSearch className="search-icon"/>
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="header-icon d-flex-row">
          <div className="m-1">
            <BsPlusLg />
          </div>
          <div className="m-1">
            <BsFillBellFill />
          </div>
          <div className="header-account m-1">
            <p>TM</p>
          </div>
        </div>
      </div>
    </>
  );
}
