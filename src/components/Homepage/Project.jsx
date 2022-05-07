import React from 'react'
import "./Homepage.scss";
export default function Project({project}) {
  return (
    <>
      <a href="">
        <div className="project d-flex-col m-1 p-1">
            <p>{project.name}</p>
            <p>{project.Date}</p>
        </div>
      </a>
    </>
  );
}
