import { useState, createContext } from "react";

export const Context = createContext();

export default function({children}){
    //some simple data
    //userList
    const userList = [
        {
            id: 1,
            username: 'caohaisil201',
            password: 'sil201201',
            fullname: 'Cao Hải Síl',
            avatar: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80'
        },
        {
            id: 2,
            username: 'abc',
            password: '123',
            fullname: 'Someone name',
            avatar: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80'
        },
    ]
    //statusList
    const statusList = [
        {
            id: 1,
            name:"New"
        },
        {
            id: 2,
            name:"Pending"
        },
        {
            id: 3,
            name:"Processing"
        },
        {
            id: 4,
            name:"Ready For QA"
        },
        {
            id: 5,
            name:"Testing"
        },
        {
            id: 6,
            name:"Undone"
        },
        {
            id: 7,
            name:"Pause"
        },
        {
            id: 8,
            name:"Done"
        },
    ];
    //taskList
    const taskList = [
        {
            id: 1,
            name: 'Task 1',
            project_id: 1,
            createdBy: 'Someone_id',
            status_id: 1,
            startDate: '01/01/2022',
            endDate: '02/02/2022',
            description: 'This is a task bla bla bla',
        },
        {
            id: 2,
            name: 'Task 2',
            project_id: 1,
            createdBy: 'Someone_id',
            status_id: 1,
            startDate: '01/01/2022',
            endDate: '02/02/2022',
            description: 'This is a task bla bla bla',
        },
        {
            id: 3,
            name: 'Task 3',
            project_id: 1,
            createdBy: 'Someone_id',
            status_id: 2,
            startDate: '01/01/2022',
            endDate: '02/02/2022',
            description: 'This is a task bla bla bla',
        },
    ]

    //separate taskList
    const separateTaskList = statusList.map(statusItem=>
        ({
            status_id: statusItem.id,
            status_name: statusItem.name,
            list: [],
        })
    )

    taskList.forEach(task=>{
        let item = separateTaskList.find(({status_id})=>status_id===task.status_id);
        item.list.push(task);
    })


    const [user,setUser] = useState({
        username: '',
        password: '',
    })

    const store = {
        userList,
        statusList,
        separateTaskList,
        user: [user, setUser]
    }
    
    return <Context.Provider value={store}>{children}</Context.Provider>
}