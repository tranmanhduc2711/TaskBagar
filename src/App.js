import './style/_reset.scss';
import "./style/_global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login";
import Register from './components/Register';
import AddNewTask from './components/AddNewTask';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          {/* <Header/> */}
          <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            
            {/**This route is temporary
             * this component will show when
             * open in home component  */}
            <Route path="/add-new-task" element={<AddNewTask/>}/>
            {/* <Route exact path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
