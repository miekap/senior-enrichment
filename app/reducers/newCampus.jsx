// import axios from 'axios';
// import socket from '../socket';

// ACTION TYPES

const WRITE_CAMPUS = 'WRITE_CAMPUS'

// ACTION CREATORS

export function writeCampus(campusName) {
    const action = { type: WRITE_CAMPUS, campusName };
    return action;
}

// REDUCER

export default function newStudentReducer(state = '', action) {

    switch (action.type) {
        case WRITE_CAMPUS:
            return action.campusName;

        default:
            return state;
    }

}

