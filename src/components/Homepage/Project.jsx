import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import {Context} from "../../store/context";
import axios from "axios";
import "./Homepage.scss";

export default function Project({ project }) {
  const tasksContext = useContext(Context).tasks;
  const navigate = useNavigate();

  const handleChangeUrl = async () => {
    await axios.get(`http://localhost:8000/projects/detailProject?id=${project.id}`)
      .then(response =>response.data)
      .then(tasks => {
        return tasks.map(task => {
            const id = task.id;
            const name = task.name;
            const createdBy = task.createdby;
            const status_id = task.status_id;
            const startTime = task.starttime;
            const endTime = task.endtime;
            const description = task.description;
            return {
                id,
                name,
                createdBy,
                status_id,
                startTime,
                endTime,
                description,
            }
          })
        })
        .then(taskList => tasksContext[1](taskList))
        .then(()=>{navigate('/project')})
        .catch(error => console.log(error));
        
      // })
    // navigate(`/project?id=${project.id}`)
  };

  return (
    <>
      <div onClick={handleChangeUrl} className="project d-flex-col m-1 p-1">
        <p>{project.name}</p>
        <p>{project.Date}</p>
      </div>
    </>
  );
}
