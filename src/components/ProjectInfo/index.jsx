import React, {useState, useEffect} from "react";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';

import styles from "./style.module.scss";

const ProjectInfo = ({close}) => {
  const [projectInfo, setProjectInfo] = useState({});

  useEffect(() => {
    let projectId = sessionStorage.projectId;
    const fetchCreatedUser = async (id) => {
      await axios.get(`http://localhost:8000/users/userByTask?id=${id}`)
      .then(res => {
        let createdby = res.data.name;
        setProjectInfo({...projectInfo, createdby});
      })
    }

    const fetchProjectInfo = async () => {
      await axios.get(`http://localhost:8000/projects/infoProject?id=${projectId}`)
        .then(res => {
          console.log(res.data)
          let name = res.data.name;
          let customer = res.data.customer.name;
          let createdby = res.data.createdby;
          let starttime = res.data.starttime.split('T')[0];
          let endtime = res.data.endtime.split('T')[0];
          let description = res.data.description;
          let category = res.data.category.name;

          setProjectInfo({
            ...projectInfo,
            name,
            customer,
            starttime,
            endtime,
            category,
            description,
          })
          fetchCreatedUser(createdby)

        })
        .catch(error => console.log(error));
    }
    fetchProjectInfo();

  }, []);

  return (
    <div className={styles.layer}>
      <div className={styles.ProjectInfo}>
        <div className={styles.header}>
          <h2>Project Information</h2>
          <CloseIcon onClick={close} />
        </div>
        <div className={styles.information}>
          <div className={styles.basic}>
            <h5>Project name: {projectInfo.name}</h5>
            <h5>Customer: {projectInfo.customer}</h5>
            <h5>Created by: {projectInfo.createdby}</h5>
          </div>
          <div className={styles.time}>
            <p>Start: {projectInfo.starttime}</p>
            <p>End: {projectInfo.endtime}</p>
          </div>
          <p>Category: {projectInfo.category}</p>
          <p>Description: {projectInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
