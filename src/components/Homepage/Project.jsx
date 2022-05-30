import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import {Context} from "../../store/context";
import axios from "axios";
import "./Homepage.scss";

export default function Project({ project }) {
  const tasksContext = useContext(Context).tasks;
  const navigate = useNavigate();

  const handleChangeUrl = async () => {
    sessionStorage.setItem('projectId',project.id);
    navigate('/project');
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
