import React from 'react'
import Project from './Project'
export default function ListProject({listProject}) {
     const project = [
       { name: "Momo", id: 1, Date: "01/01/2022" },
       { name: "Zalo", id: 2, Date: "02/01/2022" },
       { name: "Netflix", id: 3, Date: "03/01/2022" },
     ];
  return (
    <>
      {project.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
    </>
  );
}
