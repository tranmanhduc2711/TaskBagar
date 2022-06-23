import { useState, createContext, useEffect } from "react";
import axios from "axios";
export const Context = createContext();


export default function({children}){
    const [statusList, setStatusList] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [isDark, setIsDark] = useState(false);
    //some simple data
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

    const [user,setUser] = useState({
        username: '',
        password: '',
    })

    const store = {
        statusList,
        user: [user, setUser],
        tasks: [tasks, setTasks],
        isDark: [isDark, setIsDark],
    }
    
    return <Context.Provider value={store}>{children}</Context.Provider>
}