import axios from 'axios';
import history from '../history'
// import socket from '../socket';

// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const CHANGE_STUDENT = 'CHANGE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

// ACTION CREATORS

export function getStudents(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function addStudent(student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

export function changeStudent(student) {
  const action = {type: CHANGE_STUDENT, student };
  return action;
}

export function deleteStudent(student) {
  const action = { type: DELETE_STUDENT, student };
  return action;
}

// THUNK CREATORS

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

export function postStudent(student) {
  return function thunk(dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => dispatch(addStudent(newStudent)))
      .then(() => history.push('/students'))
  };
}

export function editStudent(student) {
  return function thunk(dispatch) {
    return axios.put(`/api/student/${student.id}`, student)
      .then(res => res.data)
      .then(editedStudent => dispatch(changeStudent(editedStudent)))
      .then(() => history.push('/students'))
  };
}

export function removeStudent(student) {
  return function thunk(dispatch) {
    return axios.delete(`/api/student/${student.id}`)
      .then(() => {
        const action = deleteStudent(student);
        dispatch(action);
      });
  };
}

// REDUCER

export default function studentsReducer(state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case ADD_STUDENT:
      return [...state, action.student];

    case CHANGE_STUDENT:
      return state.map(student => {
        return (student.id == action.student.id)
          ? Object.assign({}, action.student)
          : Object.assign({}, student)
        })

    case DELETE_STUDENT:
      return state.filter(student =>
          student.id !== action.student.id)

    default:
      return state;
  }

}
