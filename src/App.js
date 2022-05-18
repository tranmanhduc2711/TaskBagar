import "./style/_reset.scss";
import "./style/_global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddNewProject from "./components/AddProject/AddProject";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import Workspace from "./components/Workspace";

function App() {
    console.log("render App");
    return (
        <>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route path="/project" element={<Workspace />} />
                          
                        <Route
                            path="/addNewProject"
                            element={<AddNewProject />}
                        />
                              
                        <Route path="/" element={<Homepage />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
