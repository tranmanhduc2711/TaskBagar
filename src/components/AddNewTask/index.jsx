import React from "react";
import axios from "axios";
import { useState, useRef, useLayoutEffect } from "react";

import LabelIcon from "@mui/icons-material/Label";
import AddTaskLabel from "../AddTaskLabel";
import styles from "./style.module.scss";

const AddNewTask = ({ close }) => {
    const [showAddLabels, setShowAddLabels] = useState(false);

    const [taskName, setTaskName] = useState("");
    const [desc, setDesc] = useState("");
    const [employee, setEmployee] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const [labels, setLabels] = useState([]);

    const startRef = useRef();
    const endRef = useRef();

    useLayoutEffect(()=>{
        const fecthLabels = async () => {
            await axios.get('http://localhost:8000/labels')
            .then(res => {
                let labels = res.data.map((label)=>{
                    return {
                        id: label.id,
                        name: label.name,
                        color: label.color,
                        isSelected: false,
                    }
                })
                setLabels(labels);
            })
            .catch(error => console.log(error));
        }

        fecthLabels();
    },[labels.length])

    const handleOpenLabels = async e => {
        e.preventDefault();
        setShowAddLabels(true);
    }

    const handleCloseLabels = () => {
        labels.forEach(label=>{
            label.isSelected = false;
        })
        setLabels([...labels])
        setShowAddLabels(false);
    }

    const toggleSelectedLabel = e => {
        let labelId = e.target.getAttribute('data-id');
        let label = labels.find(({id})=>Number(labelId)===id)
        label.isSelected = !label.isSelected;
        setLabels([...labels]);
    }

    const submitAdd = e => {
        e.preventDefault();
        setShowAddLabels(false);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
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

        //request API task and labels
        let labelsTask = labels.filter(label=>label.isSelected);

        //call API
        axios.post("http://localhost:8000/tasks/addNewTask", {
                name: name,
                project_id: project_id,
                status_id: status_id,
                createdby: createdby,
                starttime: starttime,
                endtime: endtime,
                description: description,
                label: labelsTask
            })
            .then((res) => console.log(res.data));
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
                {showAddLabels && 
                    <AddTaskLabel 
                        close={handleCloseLabels}
                        toggleSelectedLabel={toggleSelectedLabel}
                        labels={labels}
                        submitAdd={submitAdd}
                    />
                }
                <div className={styles.group}>
                    {/*temporary onCLick */}
                    <button
                        className={`${styles.button} ${styles.labelBtn}`}
                        onClick={handleOpenLabels}
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
