import logo from './logo.svg';
import './App.css';

import AddStudentForm from './components/Students/AddStudentForm';
import ListOfStudents from './components/Students/ListOfStudents';
import Button from './components/UI/Button';
import Container from './components/UI/Container';
import { useState } from 'react';

function App() {
  const [showAddStudentForm, setShowAddStudentForm] = useState(true);
  const [studentsList, setStudentsList] = useState([]);
  const showAddStudent = () => {
    setShowAddStudentForm(false);
  };

  const hideAddStudentForm = (status) => {
    setShowAddStudentForm(status);
  };

  const studentInfoHandler = (studentInfo) => {
    setStudentsList((prevStudentsList) => {
      return [
        ...prevStudentsList,
        { fName: studentInfo.fName, lName: studentInfo.lName, year: studentInfo.year, id: Math.random().toString() },
      ];
    });
  }

  return (
    <div className="App">
      <h1>Students Activity</h1>
      <Container>
        <Button text="Add a new student" onClick={showAddStudent}/>
        {!showAddStudentForm && <AddStudentForm  hideAddStudentForm={hideAddStudentForm} studentInfo={studentInfoHandler}/>}
        <ListOfStudents studentsList={studentsList}/>
      </Container>
    </div>
  );
}

export default App;
