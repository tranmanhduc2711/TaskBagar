import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import StatusColumn from "./StatusColumn";
import styles from "./style.module.scss";

const Content = ({ separateTaskList }) => {
    const onDragEnd = (result) => {
        //TODO: reorder columns
        console.log(result);
        const { source, destination, draggableId } = result;
        if (!destination) {
            return;
        }
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        const task = separateTaskList[Number(source.droppableId)].list.splice(
            source.index,
            1,
        );
        separateTaskList[Number(destination.droppableId)].list.splice(
            destination.index,
            0,
            ...task,
        );
        //change database after this
    };

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className={styles.content}>
                    {separateTaskList.map((statusItem) => (
                        <StatusColumn
                            statusItem={statusItem}
                            key={statusItem.status_id}
                        />
                    ))}
                </div>
            </DragDropContext>
        </>
    );
};

export default Content;
