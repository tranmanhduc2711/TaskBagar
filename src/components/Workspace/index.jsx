import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/context";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

import AddNewTask from "../AddNewTask";
import Content from "./Content";

import styles from "./style.module.scss";

const Workspace = () => {
    const navigate = useNavigate();

    const context = useContext(Context);
    const userContext = context.user;
    const statusList = context.statusList;

    const [tasks, setTasks] = useState([]);
    const [separateTaskList, setSeparateTaskList] = useState([]);
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
        setOpenAddNewTask(true);
    };

    const handleCloseAddNewTask = (e) => {
        e.preventDefault();
        setOpenAddNewTask(false);
    };

    const fecthTaskList = async (projectId) => {
        await axios
            .get(`http://localhost:8000/projects/detailProject?id=${projectId}`)
            .then((response) => response.data)
            .then((tasks) => {
                return tasks.map((task) => {
                    const id = task.id;
                    const name = task.name;
                    const createdBy = task.createdby;
                    const status_id = task.status_id;
                    const startTime = task.starttime;
                    const endTime = task.endtime;
                    const description = task.description;
                    return {
                        id,
                        name,
                        createdBy,
                        status_id,
                        startTime,
                        endTime,
                        description,
                    };
                });
            })
            .then((taskList) => setTasks(taskList))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        const user = sessionStorage.user
            ? JSON.parse(sessionStorage.user)
            : undefined;
        if (user) {
            userContext[1](user);
            const projectId = sessionStorage.projectId
                ? JSON.parse(sessionStorage.projectId)
                : undefined;
            if (!projectId) {
                navigate("/");
            } else {
                fecthTaskList(projectId);
                const status = statusList.map((statusItem) => ({
                    status_id: statusItem.id,
                    status_name: statusItem.name,
                    list: [],
                }));

                tasks.forEach((task) => {
                    let item = status.find(
                        ({ status_id }) => status_id === task.status_id,
                    );
                    item.list.push(task);
                });

                setSeparateTaskList(status);
            }
        } else {
            navigate("/login");
        }
    }, [tasks.length]);

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
                <Content separateTaskList={separateTaskList} />
            </div>
            {openAddNewTask && <AddNewTask close={handleCloseAddNewTask} />}
        </>
    );
};

export default Workspace;
