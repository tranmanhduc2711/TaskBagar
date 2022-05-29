import React,{useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";

import {Context} from "../../store/context";
import { BsPlusLg, BsFillBellFill,BsSearch,BsFillPersonPlusFill } from "react-icons/bs";
import './header.scss';
export default function Header() {
  const context = useContext(Context);
  const userContext = context.user;
  const [searchContext,setSearchContext] = useState('');
  const [showBtns, setShowBtns] = useState(false);
  const [showAdminBtns, setShowAdminBtns] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if(userContext[0].username){
      setShowBtns(true);
      if(userContext[0].role==='admin'){
        setShowAdminBtns(true)
      }
    }else{

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

  return (
    <>
      <div className="header d-flex-row">
        <div className="d-flex-row content-wrap">
          <div className="header-name">
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
          <div className="header-account m-1">
            <p>TM</p>
          </div>
        </div>}
      </div>
    </>
  );
}
