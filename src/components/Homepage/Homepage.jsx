import React,{useState} from 'react'
import './Homepage.scss'
import ListProject from './ListProject';
export default function Homepage() {
    const [listProject,setListProject] = useState([]);
  return (
   <>
    <div className="homepage-container p-1 d-flex-col">
        <ListProject></ListProject>
    </div>
   </>
  )
}
