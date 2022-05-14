import React from "react";
import styles from "./style.module.scss";
import Task from "./Task";

const StatusColumn = ({ name, taskList }) => {
    
    return (
        <div className={styles.status}>
            <h5>{name}</h5>
            <div className={styles.list}>
                {taskList.map(task=>
                    <Task task={task} key={task.id}/>
                )}
            </div>
        </div>
    );
};

export default StatusColumn;
