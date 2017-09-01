// import axios from 'axios';
// import socket from '../socket';

// ACTION TYPES

const WRITE_STUDENT = 'WRITE_STUDENT'

// ACTION CREATORS

export function writeStudent(studentName) {
    const action = { type: WRITE_STUDENT, studentName };
    return action;
}

// REDUCER

export default function newStudentReducer(state = '', action) {

    switch (action.type) {
        case WRITE_STUDENT:
            return action.studentName;

        default:
            return state;
    }

}

