import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

import OtherTaskInfo from "../OtherTaskInfo";
import styles from "./style.module.scss";

// const Task = ({ task }) => {
//     const [openTaskInfo, setOpenTaskInfo] = useState(false);

//     const handleOpenTaskInfo = () => {
//         setOpenTaskInfo(true);
//     };

//     const handleCloseTaskInfo = () => {
//         setOpenTaskInfo(false);
//     };

//     return (
//         <>
//             <Draggable>
//                 <div onClick={handleOpenTaskInfo} className={styles.task}>
//                     {task.name}
//                 </div>
//             </Draggable>

//             {openTaskInfo && (
//                 <OtherTaskInfo
//                     taskName={task.name}
//                     startDate={task.startDate}
//                     endDate={task.endDate}
//                     description={task.description}
//                     close={handleCloseTaskInfo}
//                 />
//             )}

//         </>
//     );
// };

const Task = ({ task,index }) => {
    const [openTaskInfo, setOpenTaskInfo] = useState(false);

    const handleOpenTaskInfo = () => {
        setOpenTaskInfo(true);
    };

    const handleCloseTaskInfo = () => {
        setOpenTaskInfo(false);
    };
    console.log(task.id);
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
                            taskName={task.name}
                            startDate={task.startDate}
                            endDate={task.endDate}
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
