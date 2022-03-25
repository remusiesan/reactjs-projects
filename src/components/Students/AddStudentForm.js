import React, { useState } from "react";
import classes from './AddStudentForm.module.css';

import Button from "../UI/Button";

const AddStudentForm = (props) => {
    const submitFormHandler = (event) => {
        event.preventDefault();
        if(fName.trim().length > 0 && lName.trim().length > 0 && year.trim().length > 0){
            let studentInfo = {fName: fName, lName: lName, year: year};
            setFname('');
            setLname('');
            setYear('');
            setTimeout(() => {
                props.hideAddStudentForm(true);
                props.studentInfo(studentInfo);
            }, 2000);
        } else {
            props.hideAddStudentForm(false);
            props.listOfStudents(null);
        }
    }

    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [year, setYear] = useState('');

    const fNameHandler = (event) => {
        setFname(event.target.value);
    }

    const lNameHandler = (event) => {
        setLname(event.target.value);
    }

    const yearHandler = (event) => {
        setYear(event.target.value);
    }

    return(
        <form className={classes.form} onSubmit={submitFormHandler} >
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" value={fName} onChange={fNameHandler}/>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" value={lName} onChange={lNameHandler}/>
            <label htmlFor="year">Year</label>
            <input type="number" id="year" value={year} min="1" max="4" onChange={yearHandler}/>
            <br/>
            <Button type="submit" text="Submit"/>
        </form>
    );
}

export default AddStudentForm;