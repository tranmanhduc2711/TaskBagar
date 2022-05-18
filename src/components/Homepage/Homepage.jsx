import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import './Homepage.scss'
import ListProject from './ListProject';
export default function Homepage() {
  const [listProject,setListProject] = useState([]);
  let param = useParams();

  const fetchProjectData = () => {
    console.log(param.name);
    if(!param.name)
    {
      axios
        .get(`http://localhost:8000/projects`)
        .then((res) => {
          const projectData = res.data;
          setListProject([...projectData]);
        })
        .catch((error) => console.log(error));
    }
    else{
      
      axios
        .get(`http://localhost:8000/projects/${param.name}`)
        .then((res) => {
          const projectData = res.data;
          setListProject([...projectData]);
        })
        .catch((error) => console.log(error));
    }
  };
    useEffect(() => {
      fetchProjectData();
    }, [param.name]);
  return (
   <>
    {
      listProject? 
      <div className="homepage-container p-1 d-flex-col">
        <ListProject listProject={listProject}></ListProject>
      </div> : ''
    }
    
   </>
  )
}
