import { useState, useEffect, createContext } from "react";
import axios from "axios";
export const Context = createContext();


export default function({children}){
    const [statusList, setStatusList] = useState([]);
    const [tasks, setTasks] = useState([]);
    //some simple data
    //statusList
    async function fetchStatusList(){
        await axios.get('http://localhost:8000/status')
            .then(response => {
                setStatusList(response.data);
            })
            .catch(error => console.log(error));
    }

    useEffect(()=>{
        fetchStatusList();
    },[statusList.length])

    //taskList
    const taskList = [
        {
            id: 1,
            name: 'Task 1',
            project_id: 1,
            createdBy: 'Someone_id',
            status_id: 0,
            startDate: '01/01/2022',
            endDate: '02/02/2022',
            description: 'This is a task bla bla bla',
        },
        {
            id: 2,
            name: 'Task 2',
            project_id: 1,
            createdBy: 'Someone_id',
            status_id: 0,
            startDate: '01/01/2022',
            endDate: '02/02/2022',
            description: 'This is a task bla bla bla',
        },
        {
            id: 3,
            name: 'Task 3',
            project_id: 1,
            createdBy: 'Someone_id',
            status_id: 1,
            startDate: '01/01/2022',
            endDate: '02/02/2022',
            description: 'This is a task bla bla bla',
        },
        {
            id: 4,
            name: 'Task 4',
            project_id: 1,
            createdBy: 'Someone_id',
            status_id: 2,
            startDate: '01/01/2022',
            endDate: '02/02/2022',
            description: 'This is a task bla bla bla',
        },
        {
            id: 5,
            name: 'Task 5',
            project_id: 1,
            createdBy: 'Someone_id',
            status_id: 0,
            startDate: '01/01/2022',
            endDate: '02/02/2022',
            description: 'This is a task bla bla bla',
        },
        {
            id: 6,
            name: 'Task 6',
            project_id: 1,
            createdBy: 'Someone_id',
            status_id: 2,
            startDate: '01/01/2022',
            endDate: '02/02/2022',
            description: 'This is a task bla bla bla',
        },
    ]

    //separate taskList
    // const separateTaskList = statusList.map(statusItem=>
    //     ({
    //         status_id: statusItem.id,
    //         status_name: statusItem.name,
    //         list: [],
    //     })
    // )

    // taskList.forEach(task=>{
    //     let item = separateTaskList.find(({status_id})=>status_id===task.status_id);
    //     item.list.push(task);
    // })


    const [user,setUser] = useState({
        username: '',
        password: '',
    })

    const store = {
        statusList,
        // separateTaskList,
        user: [user, setUser],
        tasks: [tasks, setTasks],
    }
    
    return <Context.Provider value={store}>{children}</Context.Provider>
}