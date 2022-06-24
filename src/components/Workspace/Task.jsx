import React, { useLayoutEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";

import OtherTaskInfo from "../OtherTaskInfo";
import styles from "./style.module.scss";

const Task = ({ task,index }) => {
    const [openTaskInfo, setOpenTaskInfo] = useState(false);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleOpenTaskInfo = () => {
        setOpenTaskInfo(true);
    };

    const handleCloseTaskInfo = () => {
        setOpenTaskInfo(false);
    };

    useLayoutEffect(()=>{
        const formatDate = (date) =>{
            date=date.split('T')[0]
            date=date.split('-').reverse().join('/');
            return date;
        }

        setStartTime(formatDate(task.startTime));
        setEndTime(formatDate(task.endTime));
    },[])

    return (
        <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
            {(provided) => (
                <>
                    <div
                        onClick={handleOpenTaskInfo}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={styles.task}
                    >
                        {task.name}
                    </div>

                    {openTaskInfo && (
                        <OtherTaskInfo
                            taskId={task.id}
                            taskName={task.name}
                            employeeId={{name:task.createdBy}}
                            startDate={startTime}
                            endDate={endTime}
                            description={task.description}
                            close={handleCloseTaskInfo}
                        />
                    )}
                </>
            )}
        </Draggable>
    );
};

export default Task;
