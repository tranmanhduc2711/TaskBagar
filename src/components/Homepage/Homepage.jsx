import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import "./Homepage.scss";
import ListProject from "./ListProject";
import {Context} from "../../store/context";
export default function Homepage() {
  const [listProject, setListProject] = useState([]);
  let param = useParams();

  const userContext = useContext(Context).user;
  const navigate = useNavigate();
  useEffect(() => {
    const user = sessionStorage.user
      ? JSON.parse(sessionStorage.user)
      : undefined;
    if (user) {
      userContext[1](user);
      sessionStorage.removeItem('projectId');
    } else {
      navigate("/login");
    }
  }, []);

  const fetchProjectData = () => {
    if (!param.name) {
      axios
        .get(`http://localhost:8000/projects`)
        .then((res) => {
          const projectData = res.data;
          setListProject([...projectData]);
        })
        .catch((error) => console.log(error));
    } else {
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
      {listProject ? (
        <div className="homepage-container p-1 d-flex-col">
          <ListProject listProject={listProject}></ListProject>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
