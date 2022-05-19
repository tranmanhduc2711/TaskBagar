import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.scss";
export default function Project({ project }) {
  const navigate = useNavigate();

  const handleChangeUrl = () => {
    navigate(`/project?id=${project.id}`);
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
