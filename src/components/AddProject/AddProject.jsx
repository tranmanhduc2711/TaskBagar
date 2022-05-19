import React,{useState,useContext} from 'react'
import { useNavigate} from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import './addNewProject.scss'
import ListManager from './ListManager';

//export const managerContext = React.createContext();

export default function AddProject() {
  //list manager,employee,category

  const [listManager,setListManager] = useState([]);
  const [listEmployee, setListEmployee] = useState([]);
  const [listCategories, setListcategories] = useState([]);
  const [listParticipants, setListParticipants] = useState([]);
  //project info
  const [projectName,setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState("");
  const [projectCus, setProjectCus] = useState("");
  //add new category
  const [category,setCategory] = useState("");

  let navigate = useNavigate();
  const handleChangeProName = (e)=>{
    setProjectName(e.target.value);
  }
  const handleChangeDes = (e) => {
    setProjectDescription(e.target.value);
  };
  const handleChangeCus = (e) => {
    setProjectCus(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  }

  const handleSubmitCategory = (e) => {
    console.log(category);
  }

  const handleSubmitProject = (e) => {
    console.log({
      project_name: projectName,
      project_description: projectDescription,
      project_cus: projectCus
    })
  }
  const handleExitBtn = (e) => {
    navigate(-1,{replace:true});
  }
  const manager = [
    { name: "John", id: 1, check: false },
    { name: "Duc", id: 2, check: false },
    { name: "Nam", id: 3, check: false },
  ];
  return (
    <>
      <div className="layer">
        <div className="add-project-container p-1">
          <div className="title d-flex-row">
            <h1 className="p-1">Add New Project</h1>
            <div className="">
              <button className="title-icon" onClick={handleExitBtn}>
                <IoCloseCircle />
              </button>
            </div>
          </div>
          <div className="d-flex-row project-information">
            <div className="left p-1">
              <div className="d-flex-col">
                <label>INFO</label>
                <input
                  type="text"
                  placeholder="Project name"
                  value={projectName}
                  onChange={handleChangeProName}
                ></input>
              </div>
              <div className="d-flex-row">
                <input
                  style={{ width: "100%" }}
                  type="text"
                  placeholder="Short description"
                  value={projectDescription}
                  onChange={handleChangeDes}
                ></input>
              </div>

              <div className="category d-flex-col">
                <label>ADD NEW CATEGORY</label>
                <input
                  type="text"
                  placeholder="Category name"
                  value={category}
                  onChange={handleChangeCategory}
                ></input>
              </div>
              <div>
                <button onClick={handleSubmitCategory} className="primary">
                  ADD
                </button>
              </div>
            </div>

            <div className="right d-flex-col p-1">
              <div className="d-flex-col">
                <label>CUSTOMER</label>
                <input
                  type="text"
                  placeholder="Customer name"
                  value={projectCus}
                  onChange={handleChangeCus}
                ></input>
              </div>
              {/* <managerContext.Provider value={[listParticipants, setListParticipants]}> */}
                <div>
                  <label>MANAGER</label>
                  <div className="list-manager p-1">
                    <ListManager listManager={manager}></ListManager>
                  </div>
                </div>
              {/* </managerContext.Provider> */}
              <div>
                <label>EMPLOYEE</label>
                <div className="list-manager p-1">
                  <ListManager listManager={manager}></ListManager>
                </div>
              </div>
              <div>
                <label>CATEGORY</label>
                <div className="list-manager p-1">
                  <ListManager listManager={manager}></ListManager>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-group">
            <button onClick={handleExitBtn} className="danger m-1">
              CANCEL
            </button>
            <button
              onClick={handleSubmitProject}
              type="submit"
              className="primary m-1"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
