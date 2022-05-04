import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import AddStudent from './pages/AddStudent'
import StudentList from './pages/StudentList'

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Add</Link>
        <Link to="/students">Students</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AddStudent />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </div>
  );
}

export default App;
