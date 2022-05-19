import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import LabelIcon from '@mui/icons-material/Label';
import NotesIcon from '@mui/icons-material/Notes';
import ChatIcon from '@mui/icons-material/Chat';
import AttachmentIcon from "@mui/icons-material/Attachment";
import Input from "../Input/index";
import styles from './style.module.scss';

const OtherTaskInfo = ({
  taskName,
  startDate,
  endDate,
  description,
  close,
}) => {
  /**
   * Data will get from API
   * All value above is temporary
   */

  const [comment, setComment] = useState("");
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

  const employee = {
    name: "Eployee name",
    avatar: "url",
  };
  const labels = [
    {
      name: "label1",
      color: "red",
    },
    {
      name: "label2",
      color: "green",
    },
    {
      name: "label3",
      color: "blue",
    },
  ];
  
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
        {
          close();
        }
      }
    }
  };

  return (
    <>
      <div className={styles.layer}>
        <div className={styles.info}>
          <div style={{ width: "75%" }}>
            <CloseIcon onClick={handleClose} className={styles.close} />
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
                  {employee.name}
                </div>
                <div>Start: {startDate}</div>
                <div>Start: {endDate}</div>
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
                  <input
                    type="text"
                    value={comment}
                    onChange={handleChangeComment}
                  ></input>
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
                <button className="danger">DELETE</button>
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
