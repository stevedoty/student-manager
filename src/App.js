import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddStudent from './pages/AddStudent'
import StudentList from './pages/StudentList'

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Add</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/students">Students</Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<AddStudent />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </div>
  );
}

export default App;
