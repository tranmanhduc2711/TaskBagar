import React, {useRef} from "react";
import Draggable from "react-draggable";
import styles from "./style.module.scss";
import Task from "./Task";

const StatusColumn = ({ name, taskList }) => {
    // const nodeRef = useRef();
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
