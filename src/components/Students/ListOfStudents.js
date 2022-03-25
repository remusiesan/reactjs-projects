import React from "react";
import classes from './ListOfStudents.module.css';

const ListOfStudents = (props) => {
    if(props.studentsList.length > 0){
        return (
            <ul className={classes.list_of_students}>
                {props.studentsList.map((student) => (
                <li key={Math.random().toString()}>
                    {student.fName} {student.lName} {student.year}
                </li>
                ))}
            </ul>
        );
    }
    return null;
}

export default ListOfStudents;