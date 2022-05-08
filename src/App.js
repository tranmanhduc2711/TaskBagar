import './style/_reset.scss';
import "./style/_global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddNewProject from './components/AddProject/AddProject';
import Homepage from './components/Homepage/Homepage';
import Login from "./components/Login";
import Register from './components/Register';
import AddNewTask from './components/AddNewTask';
import OtherTaskInfo from './components/OtherTaskInfo';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/**Two routes above are temporary
             * this component will show when
             * open in home component  */}
            <Route path="/add-new-task" element={<AddNewTask />} />
            <Route path="/other-task-info" element={<OtherTaskInfo />} />
            {/* <Route exact path="/login" element={<Login />} /> */}

            <Route path="/addNewProject" element={<AddNewProject />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
