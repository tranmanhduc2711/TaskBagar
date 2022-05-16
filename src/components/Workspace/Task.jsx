import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import OtherTaskInfo from "../OtherTaskInfo";
import styles from "./style.module.scss";

const Task = ({ task }) => {
    const [openTaskInfo, setOpenTaskInfo] = useState(false);
    const nodeRef = useRef(null);
    const handleOpenTaskInfo = () => {
        setOpenTaskInfo(true);
    };

    const handleCloseTaskInfo = () => {
        setOpenTaskInfo(false);
    };
    
    return (
        <>
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef} onClick={handleOpenTaskInfo} className={styles.task}>
                    {task.name}
                </div>
            </Draggable>
            
            {openTaskInfo && (
                <OtherTaskInfo
                    taskName={task.name}
                    startDate={task.startDate}
                    endDate={task.endDate}
                    description={task.description}
                    close={handleCloseTaskInfo}
                />
            )}
            
        </>
    );
};

export default Task;
