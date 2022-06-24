import "./style/_reset.scss";
import "./style/_global.scss";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./store/context";

import Header from "./components/Header/Header";
import AddNewProject from "./components/AddProject/AddProject";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import Workspace from "./components/Workspace";
import Userinfo from "./components/Userinfo";

function App() {
  const isDark = useContext(Context).isDark[0];
  return (
    <>
      <Router>
        <div className={isDark ? `App Dark` : `App`}>
          <Header />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/project" element={<Workspace />} />
            <Route path="/addNewProject" element={<AddNewProject />} />
            <Route path="/info" element={<Userinfo/>} />
            <Route path="/:name" element={<Homepage />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
