import React from "react";
import { Droppable } from "react-beautiful-dnd";

import Task from "./Task";
import styles from "./style.module.scss";

const StatusColumn = ({ statusItem }) => {
    return (
        <Droppable
            droppableId={`${statusItem.status_id}`}
            // key={statusItem.status_id}
        >
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={styles.status}
                >
                    <h5>{statusItem.status_name}</h5>
                    <div className={styles.list}>
                        {statusItem.list.map((task,index) => {
                            return (
                                <Task key={index} index={index} task={task}/>
                                // <Draggable
                                //     key={task.id}
                                //     draggableId={`${task.id}`}
                                //     index={task.id}
                                // >
                                //     {(provided) => (
                                //         <>
                                //             <div
                                //                 // onClick={handleOpenTaskInfo}
                                //                 ref={provided.innerRef}
                                //                 {...provided.draggableProps}
                                //                 {...provided.dragHandleProps}
                                //                 className={styles.task}
                                //             >
                                //                 {task.name}
                                //             </div>

                                //             {/* {openTaskInfo && (
                                //                 <OtherTaskInfo
                                //                     taskName={task.name}
                                //                     startDate={task.startDate}
                                //                     endDate={task.endDate}
                                //                     description={
                                //                         task.description
                                //                     }
                                //                     close={handleCloseTaskInfo}
                                //                 />
                                //             )} */}
                                //         </>
                                //     )}
                                // </Draggable>
                            );
                        })}
                    </div>
                </div>
            )}
        </Droppable>
    );
};

export default StatusColumn;
