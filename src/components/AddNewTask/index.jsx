import React from "react";
import { useState, useRef } from "react";

import LabelIcon from "@mui/icons-material/Label";
import styles from "./style.module.scss";

const AddNewTask = ({ close }) => {
    const [taskName, setTaskName] = useState("");
    const [desc, setDesc] = useState("");
    const [employee, setEmployee] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const startRef = useRef();
    const endRef = useRef();

    const handleCancel = (e) => {
        e.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //request API call
        const name = taskName;
        const project_id = JSON.parse(sessionStorage.projectId);
        const createdby = JSON.parse(sessionStorage.user).id;
        const status_id = 0;
        const starttime = startRef.current.value;
        const endtime = endRef.current.value;
        const description = desc;

        if(!name) {
            setErrorMessage('Please enter task name');
        }else if(!endtime){
            setErrorMessage('Please select end time');
        }else if(starttime > endtime){
            setErrorMessage('Wrong start end time');;
        }else{
            setErrorMessage('');
        }

        //call API
    };

    return (
        <div className={styles.layer}>
            <form className={styles.AddNewTask}>
                <h3>Add new task</h3>
                <input
                    placeholder="Task name (required)"
                    value={taskName}
                    required
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <input
                    placeholder="Employee"
                    value={employee}
                    onChange={(e) => setEmployee(e.target.value)}
                />
                <input ref={startRef} type="date" placeholder="Start" />
                <input ref={endRef} type="date" placeholder="Deadline" />
                <span style={{marginBottom: '10px', color: '#ff0000'}}>{errorMessage}</span>
                <div className={styles.group}>
                    {/*temporary onCLick */}
                    <button
                        className={`${styles.button} ${styles.labelBtn}`}
                        onClick={handleCancel}
                    >
                        <LabelIcon /> Label
                    </button>
                    <div>
                        <button
                            className={`${styles.button} ${styles.cancel}`}
                            onClick={close}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={[styles.button]}
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddNewTask;
