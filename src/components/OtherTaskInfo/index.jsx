import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import LabelIcon from '@mui/icons-material/Label';
import NotesIcon from '@mui/icons-material/Notes';
import ChatIcon from '@mui/icons-material/Chat';

import AttachmentIcon from "@mui/icons-material/Attachment";

import styles from "./style.module.scss";

const OtherTaskInfo = ({
  taskId,
  taskName,
  employeeId,
  startDate,
  endDate,
  description,
  close,
}) => {

  const [comment, setComment] = useState("");
  const [employee, setEmployee] = useState("");
  const [labels, setLabels] = useState([]);
  //check if employee participates task
  const participated = 1;
  //navigate url
  let navigate = useNavigate();

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };
  const handleSendComment = (e) => {
    e.preventDefault();
    console.log(comment);
  };

  useEffect(() => {
    const fetchUserInTask = async () => {
      await axios.get(`http://localhost:8000/users/userByTask`, {
        params: {"id": employeeId.name}
      })
      .then(res => {
        let userData = res.data.name;
        console.log(userData);
        setEmployee(userData);
      })
      .catch((error) => console.log(error));
    };

    const fetchLabelsInTask = async () => {
      await axios
        .get(`http://localhost:8000/labelsInTask`, {
          params: {"task_id": taskId}
        })
        .then((res) => {
          let labels = res.data.map((item) => {
            return {
              name: item.label.name,
              color: item.label.color,
            };
          });
          setLabels(labels);
        })
        .catch((error) => console.log(error));
    };

    fetchUserInTask();
    fetchLabelsInTask();

  }, [labels.length]);

  const comments = [
    {
      avatar: "url",
      username: "username1",
      comment: "Lorem ipsum dolor sit amet",
    },
    {
      avatar: "url",
      username: "username2",
      comment: "Lorem ipsum dolor sit amet",
    },
    {
      avatar: "url",
      username: "username2",
      comment: "Lorem ipsum dolor sit amet",
    },
    {
      avatar: "url",
      username: "username2",
      comment: "Lorem ipsum dolor sit amet",
    },
  ];
  //this action is temporary, close action will in props
  const handleClose = (e) => {
    if (e.target.classList[0] !== undefined) {
      if (e.target.classList[0].includes("layer")) {
        close();
      }
    }
  };

  return (
    <>
      <div className={styles.layer} onClick={handleClose}>
        <div className={styles.info}>
          <div style={{ width: "75%" }}>
            <CloseIcon onClick={close} className={styles.close} />
            <h3>{taskName}</h3>
            <div className={styles.taskDetail}>
              <h4 className={styles.title}>
                <InfoIcon /> Created by manager
              </h4>
              <div className={styles.detail}>
                <div className={styles.employee}>
                  <div className={styles.avatar}>
                    <img
                      src="https://images.unsplash.com/photo-1518549945153-64368b032957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt=""
                    />
                  </div>
                  {employee}
                </div>
                <div>Start: {startDate}</div>
                <div>End: {endDate}</div>
              </div>
            </div>
            <div className={styles.labels}>
              <h4 className={styles.title}>
                <LabelIcon /> Labels
              </h4>
              <div className={styles.list}>
                {labels.map((label, index) => {
                  return (
                    <div
                      className={styles.label}
                      style={{ backgroundColor: label.color }}
                      key={index}
                    >
                      {label.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.desc}>
              <h4 className={styles.title}>
                <NotesIcon /> Description
              </h4>
              <p>{description}</p>
            </div>
            <div className={styles.comments}>
              <h4 className={styles.title}>
                <ChatIcon /> Comments
              </h4>
              <div className={styles.commentList}>
                {comments.map((comment, index) => {
                  return (
                    <div className={styles.comment} key={index}>
                      <div className={styles.avatar}>
                        <img
                          src="https://images.unsplash.com/photo-1518549945153-64368b032957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="avatar"
                        />
                      </div>
                      <div className={styles.content}>
                        <h5>{comment.username}</h5>
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {participated ? (
                <div className={styles.sendComment}>
                  <textarea
                    type="text"
                    value={comment}
                    onChange={handleChangeComment}
                  ></textarea>
                  <button onClick={handleSendComment}>SEND</button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {participated ? (
            <div className={styles.taskInfoSidebar}>
              <p>ADD</p>
              <div>
                <LabelIcon className={styles.labelIcon} />
                <button>LABEL</button>
              </div>
              <div>
                <AttachmentIcon className={styles.attachmentIcon} />
                <button>ATTACHMENT</button>
              </div>
              <div>
                <button className="danger" onClick={async () => {
                  await axios.delete('http://localhost:8000/tasks/deleteTask',{
                    data: {
                      task_id: taskId,
                    }
                  }).then(response => response.data)
                  .catch(error=>console.log(error));
                }}>DELETE</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default OtherTaskInfo;
