import React,{useState} from 'react'
import { BsPlusLg, BsFillBellFill,BsSearch } from "react-icons/bs";
import './header.scss';
export default function Header() {
  const [showModalAddProject,setModalAddProject] = useState(false);

  const openModal = () =>{
    setModalAddProject(prev => !prev);
  }
  return (
    <>
      <div className="header d-flex-row">
        <div className="d-flex-row content-wrap">
          <div className="header-name">
            <h2>TaskBagar</h2>
          </div>
          <div className="header-search">
            <BsSearch className="search-icon" />
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="header-icon d-flex-row">
          <div onClick={openModal} className="m-1 btn">
            <BsPlusLg />
          </div>
          <div className="dropdown m-1">
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
