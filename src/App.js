import './style/_reset.scss';
import "./style/_global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddNewProject from './components/AddProject/AddProject';
import Homepage from './components/Homepage/Homepage';
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/addNewProject" element={<AddNewProject />} />
            <Route exact path="/" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
