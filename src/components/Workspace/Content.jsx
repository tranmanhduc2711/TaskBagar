import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import StatusColumn from "./StatusColumn";
import styles from "./style.module.scss";
// const Content = ({ separateTaskList }) => {
//     const [openTaskInfo, setOpenTaskInfo] = useState(false);
//     const handleOpenTaskInfo = (e) => {
//         setOpenTaskInfo(true);
//     };
//     const handleCloseTaskInfo = () => {
//         setOpenTaskInfo(false);
//     };
//     const onDragEnd = (result) => {
//         //TODO: reorder columns
//         console.log(result);
//     };

//     return (
//         <>
//             <DragDropContext onDragEnd={onDragEnd}>
//                 <div className={styles.content}>
//                     {separateTaskList.map((statusItem) => (
//                         <Droppable
//                             droppableId={`${statusItem.status_id}`}
//                             key={statusItem.status_id}
//                         >
//                             {(provided, snapshot) => (
//                                 <div
//                                     {...provided.droppableProps}
//                                     ref={provided.innerRef}
//                                     className={styles.status}
//                                 >
//                                     <h5>{statusItem.status_name}</h5>
//                                     <div className={styles.list}>
//                                         {statusItem.list.map((task) => {
//                                             return (
//                                                 <Draggable
//                                                     key={task.id}
//                                                     draggableId={`${task.id}`}
//                                                     index={task.id}
//                                                 >
//                                                     {(provided) => (
//                                                         <>
//                                                             <div
//                                                                 onClick={
//                                                                     handleOpenTaskInfo
//                                                                 }
//                                                                 ref={
//                                                                     provided.innerRef
//                                                                 }
//                                                                 {...provided.draggableProps}
//                                                                 {...provided.dragHandleProps}
//                                                                 className={
//                                                                     styles.task
//                                                                 }
//                                                             >
//                                                                 {task.name}
//                                                             </div>

//                                                             {openTaskInfo && (
//                                                                 <OtherTaskInfo
//                                                                     taskName={task.name}
//                                                                     startDate={task.startDate}
//                                                                     endDate={task.endDate}
//                                                                     description={task.description}
//                                                                     close={handleCloseTaskInfo}
//                                                                 />
//                                                             )}
//                                                         </>
//                                                     )}
//                                                 </Draggable>
//                                             );
//                                         })}
//                                     </div>
//                                 </div>
//                             )}
//                         </Droppable>
//                     ))}
//                 </div>
//             </DragDropContext>
//         </>
//     );
// };

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
