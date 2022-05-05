import * as React from "react";
import StudentForm from '../components/StudentForm'

const AddStudent = () => {
  const handleSubmit = (data) => {
    alert(data)
  }
  return (
    <div className="AddStudent">
      <h1>Add Student</h1>
      <StudentForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default AddStudent;
