import React from 'react'

import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import LabelIcon from '@mui/icons-material/Label';
import NotesIcon from '@mui/icons-material/Notes';
import ChatIcon from '@mui/icons-material/Chat';
import styles from './style.module.scss';

const OtherTaskInfo = () => {
  /**
   * Data will get from API
   * All value above is temporary
   */
  const taskName = 'Task name';
  const employee = {
    name: 'Eployee name',
    avatar: 'url',
  }
  const startDate = 'mm/dd/yyyy';
  const endDate = 'mm/dd/yyyy';
  const labels = [
    {
      name: 'label1',
      color: 'red'
    },
    {
      name: 'label2',
      color: 'green'
    },
    {
      name: 'label3',
      color: 'blue'
    },
    
  ];
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore adipisci necessitatibus perferendis perspiciatis nemo recusandae dolores inventore laboriosam dicta, ad tempora harum, natus quae porro. Beatae dolorem excepturi libero vel?`;
  const comments = [
    {
      avatar: 'url',
      username: 'username1',
      comment: 'Lorem ipsum dolor sit amet',
    },
    {
      avatar: 'url',
      username: 'username2',
      comment: 'Lorem ipsum dolor sit amet',
    }
  ];

  //this action is temporary, close action will in props
  const handleClose = () => {
    console.log('close');
  }

  return (
    <div className={styles.layer}>
        <div className={styles.info}>
            <CloseIcon onClick={handleClose} className={styles.close}/>
            <h3>{taskName}</h3>
            <div className={styles.taskDetail}>
              <h4 className={styles.title}><InfoIcon/> Created by manager</h4>
              <div className={styles.detail}>
                <div className={styles.employee}>
                  <div className={styles.avatar}>
                    <img 
                      src="https://images.unsplash.com/photo-1518549945153-64368b032957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt=""/>
                  </div>
                  {employee.name}
                </div>
                <div>
                  Start: {startDate}
                </div>
                <div>
                  Start: {endDate}
                </div>
              </div>
            </div>
            <div className={styles.labels}>
              <h4 className={styles.title}><LabelIcon/> Labels</h4>
              <div className={styles.list}>
                {labels.map((label,index)=>{
                  return <div 
                    className={styles.label} 
                    style={{backgroundColor: label.color}} 
                    key={index}>
                      {label.name}
                    </div>
                })}
              </div>
            </div>
            <div className={styles.desc}>
              <h4 className={styles.title}><NotesIcon/> Description</h4>
              <p>{description}</p>
            </div>
            <div className={styles.comments}>
              <h4 className={styles.title}><ChatIcon/> Comments</h4>
              <div className={styles.commentList}>
                {comments.map((comment,index)=>{
                  return (
                    <div className={styles.comment} key={index}>
                      <div className={styles.avatar}>
                        <img
                          src="https://images.unsplash.com/photo-1518549945153-64368b032957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="avatar"/>
                      </div>
                      <div className={styles.content}>
                        <h5>{comment.username}</h5>
                        <p>{comment.comment}</p>
                      </div>
                    </div>

                  )
                })}
              </div>
            </div>
          
        </div>
    </div>
  )
}

export default OtherTaskInfo