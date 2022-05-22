import React, {useContext} from "react";
import { Context } from "../../store/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Homepage.scss";
export default function Project({ project }) {
  const taskContext = useContext(Context).tasks;
  const navigate = useNavigate();

  const handleChangeUrl = async () => {
    await axios.get(`http://localhost:8000/projects/detailProject?id=${project.id}`)
      .then(response => response.data)
      .then(tasks => {
        return tasks.map((task)=>{
          const id=task.id;
          const name = task.name;

          let str = task.s.split(',');
          const status_id = str[0].slice(1);
          const status = str[1].slice(0,str[1].length-1);
          
          return {id,name,status_id,status};
        })
      })
      .then(taskList => taskContext[1](taskList))
      .then(()=>{navigate(`/project`)})
      .catch(error => console.log(error));
    // navigate(`/project?id=${project.id}`);
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
