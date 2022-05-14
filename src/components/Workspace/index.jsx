import React from "react";
import { useState, useRef, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Context } from "../../store/context";

import AddNewTask from "../AddNewTask";
import StatusColumn from "./StatusColumn";
import styles from "./style.module.scss";
const Workspace = () => {
    const context = useContext(Context);
    const separateTaskList = context.separateTaskList;

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
                <div className={styles.content}>
                    {separateTaskList.map((statusItem)=>
                        <StatusColumn 
                            taskList={statusItem.list}
                            name={statusItem.status_name} 
                            key={statusItem.status_id}
                        />
                    )}
                </div>
            </div>
            {openAddNewTask && <AddNewTask close={handleCloseAddNewTask}/>}
        </>
    );
};

export default Workspace;
