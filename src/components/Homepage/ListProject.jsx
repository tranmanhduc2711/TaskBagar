import React from 'react'
import Project from './Project'
export default function ListProject({listProject}) {

  return (
    <>
      {listProject.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
    </>
  );
}
