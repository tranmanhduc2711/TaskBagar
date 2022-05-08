import React,{useState} from 'react'
import { IoCloseCircle } from "react-icons/io5";
import './addNewProject.scss'
import ListManager from './ListManager';
export default function AddProject() {
  const [listManager,setListManager] = useState([]);
  return (
    <>
      <div className="add-project-container p-1">
        <div className="title d-flex-row">
          <h1 className="p-1">Add New Project</h1>
          <div className="title-icon">
            <IoCloseCircle />
          </div>
        </div>
        <div className="d-flex-row project-information">
          <div className="left p-1">
            <div className="d-flex-col">
              <label>INFO</label>
              <input type="text" placeholder="Project name"></input>
            </div>
            <div className="d-flex-row">
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Short description"
              ></input>
            </div>

            <div className="category d-flex-col">
              <label>ADD NEW CATEGORY</label>
              <input type="text" placeholder="Category name"></input>
            </div>
            <div>
              <button className="primary">ADD</button>
            </div>
          </div>

          <div className="right d-flex-col p-1">
            <div className="d-flex-col">
              <label>CUSTOMER</label>
              <input type="text" placeholder="Customer name"></input>
            </div>

            <div>
              <label>MANAGER</label>
              <div className="list-manager p-1">
                <ListManager></ListManager>
              </div>
            </div>

            <div>
              <label>EMPLOYEE</label>
              <div className="list-manager p-1">
                <ListManager></ListManager>
              </div>
            </div>
            <div>
              <label>CATEGORY</label>
              <div className="list-manager p-1">
                <ListManager></ListManager>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-group">
          <button className="danger m-1">CANCEL</button>
          <button className="primary m-1">SUBMIT</button>
        </div>
      </div>
    </>
  );
}
