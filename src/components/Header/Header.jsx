import React,{useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";

import {Context} from "../../store/context";
import { BsPlusLg, BsFillBellFill,BsSearch,BsFillPersonPlusFill } from "react-icons/bs";
import './header.scss';

export default function Header() {
  let navigate = useNavigate();
  const context = useContext(Context);
  const userContext = context.user;
  const isDarkContext = context.isDark;
  const [searchContext,setSearchContext] = useState('');
  const [showBtns, setShowBtns] = useState(false);
  const [showAdminBtns, setShowAdminBtns] = useState(false);
  const [showIconDropDown, setShowIconDropDown] = useState(false);

  useEffect(() => {
    if(userContext[0].username){
      setShowBtns(true);
      setShowIconDropDown(false);
      if(userContext[0].role_id===1){
        setShowAdminBtns(true)
      }
    }else{
      setShowBtns(false);
    }
  },[userContext[0].username])

  const onTextInputChange = (e)=>{
    setSearchContext(e.target.value)
  }

  const handleSearch = (e) => {
    if(e.key == 'Enter'){
      console.log(searchContext);
      navigate(`${searchContext}` , { replace: true });
    }
  
  }

  const handleAddUserBtn = ()=>{
    navigate('/register');
  }

  const handleAddProBtn = ()=>{
    navigate("/addNewProject",{replace: true});
  }

  const handleGetHomepage = () =>{
    navigate('/');
  }

  const handleShowIconDropDown = () =>{
    setShowIconDropDown(!showIconDropDown);
  }

  const handleLogout = () => {
    userContext[1]({});
    navigate('/login');
  }
  

  return (
    <>
      <div className="header d-flex-row">
        <div className="d-flex-row content-wrap">
          <div className="header-name" onClick={handleGetHomepage}>
            <h2>TaskBagar</h2>
          </div>
          <div className="header-search">
            <BsSearch className="search-icon" />
            <input 
            value={searchContext} 
            placeholder="Search..." 
            onChange={onTextInputChange} 
            onKeyDown={handleSearch}
            ></input>
          </div>
          <label className="switch">
            <input 
              type="checkbox" 
              value={isDarkContext[0]} 
              onChange={()=>isDarkContext[1](!isDarkContext[0])}
            />
            <span className="slider round"></span>
          </label>

        </div>

        {showBtns && <div className="header-icon d-flex-row">
          {showAdminBtns && <div className="btn">
            <button className="add-pro-btn" onClick={handleAddUserBtn}>
              <BsFillPersonPlusFill />
            </button>
          </div>}
          {showAdminBtns && <div className="m-1 btn">
            <button className="add-pro-btn" onClick={handleAddProBtn}>
              <BsPlusLg />
            </button>
          </div>}
          <div className="dropdown m-1">
            <BsFillBellFill />
          </div>
          <div className="header-account m-1" onClick={handleShowIconDropDown}>
            <p>TM</p>
          </div>
          {showIconDropDown && <div className="icon-dropdown">
            <div onClick={()=>{navigate('/info')}}>Information</div>
            <div onClick={handleLogout}>Log out</div>
          </div>}
        </div>}
      </div>
    </>
  );
}
