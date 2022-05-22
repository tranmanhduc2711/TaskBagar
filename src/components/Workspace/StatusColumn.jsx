import React from "react";
import { Droppable } from "react-beautiful-dnd";

import Task from "./Task";
import styles from "./style.module.scss";

const StatusColumn = ({ statusItem }) => {
    return (
        <Droppable
            droppableId={`${statusItem.status_id}`}
        >
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={styles.status}
                >
                    <h5>{statusItem.status_name}</h5>
                    <div className={styles.list}>
                        {statusItem.list.map((task, index) => {
                            return (
                                <Task key={index} index={index} task={task} />
                            );
                        })}
                    </div>
                </div>
            )}
        </Droppable>
    );
};

export default StatusColumn;
