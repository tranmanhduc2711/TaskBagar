import React,{useContext} from 'react'
import './addNewProject.scss';
import { managerContext } from "./AddProject";
export default function Manager({manager}) {
  const context = useContext(managerContext);


   const addParticipant = ()=>{
     context.setListParticipants([...context.listParticipants,manager.id]);
   }
  return (
    <>
        <div className="manager d-flex-row">
            <div>{manager.id}</div>
            <div>{manager.name}</div>
            <input type="checkbox" onChange={addParticipant}/>
        </div>
    </>
  )
}
