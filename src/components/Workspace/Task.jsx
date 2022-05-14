import React from "react";
import { useState } from "react";
import OtherTaskInfo from "../OtherTaskInfo";
import styles from "./style.module.scss";

const Task = ({ task }) => {
    const [openTaskInfo, setOpenTaskInfo] = useState(false);
    const handleOpenTaskInfo = () => {
        setOpenTaskInfo(true);
    }

    const handleCloseTaskInfo = () => {
        setOpenTaskInfo(false)
    }
    return (
        <>
            <div onClick={handleOpenTaskInfo} className={styles.task}>{task.name}</div>
            {openTaskInfo && 
                <OtherTaskInfo
                    taskName={task.name} 
                    startDate={task.startDate}
                    endDate={task.endDate}
                    description={task.description}
                    close={handleCloseTaskInfo}
                />
            }
        </>
    );
};

export default Task;
