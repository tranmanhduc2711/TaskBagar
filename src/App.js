import './style/_reset.scss';
import "./style/_global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            {/* <Route exact path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
