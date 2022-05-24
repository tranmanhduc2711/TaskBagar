import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { Context } from "../../store/context";
import SearchIcon from "@mui/icons-material/Search";

import AddNewTask from "../AddNewTask";
import StatusColumn from "./StatusColumn";

import styles from "./style.module.scss";

import Content from "./Content";
const Workspace = () => {
    const navigate = useNavigate();

    const context = useContext(Context);
    const userContext = context.user;
    const tasksContext = context.tasks;
    const statusList = context.statusList;
    
    const [separateTaskList,setSeparateTaskList] =useState([]);
    const [search, setSearch] = useState("");
    const [openAddNewTask, setOpenAddNewTask] = useState(false);
    const inputRef = useRef();

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleBlurSearchInput = () => {
        setSearch("");
    };

    const handleOpenAddNewTask = () => {
        setOpenAddNewTask(true)
    };

    const handleCloseAddNewTask = (e) =>{
        e.preventDefault();
        setOpenAddNewTask(false);
    }

    useEffect(()=>{
        const user = sessionStorage.user ? JSON.parse(sessionStorage.user) : undefined;
        if(user){
            userContext[1](user);

            const status = statusList.map(statusItem=>
                ({
                    status_id: statusItem.id,
                    status_name: statusItem.name,
                    list: [],
                })
            )

            tasksContext[0].forEach(task=>{
                let item = status.find(({status_id})=>status_id===task.status_id);
                item.list.push(task);
            })
            
            setSeparateTaskList(status);
        }else{
            navigate('/login');
        }
    },[])
    
    return (
        <>
            <div className={`${styles.workspace} d-flex-col`}>
                <div className={styles.header}>
                    <h2>Project name</h2>
                    <div className={styles.groupBtn}>
                        <div className={styles.search}>
                            <input
                                type="search"
                                ref={inputRef}
                                value={search}
                                onChange={handleChangeSearch}
                                onBlur={handleBlurSearchInput}
                            />
                            <SearchIcon
                                className={styles.searchIcon}
                                onClick={() => {
                                    inputRef.current.focus();
                                }}
                            />
                        </div>
                        <button
                            className={styles.btn}
                            style={{ backgroundColor: "#60C388" }}
                            onClick={handleOpenAddNewTask}
                        >
                            + new task
                        </button>
                        <button
                            className={styles.btn}
                            style={{ backgroundColor: "#8146FF" }}
                        >
                            info
                        </button>
                    </div>
                </div>
                <div className={styles.filter}>
                    <button>Label filter</button>
                    <button>Status filter</button>
                </div>
                <Content separateTaskList={separateTaskList}/>
            </div>
            {openAddNewTask && <AddNewTask close={handleCloseAddNewTask}/>}
        </>
    );
};

export default Workspace;
