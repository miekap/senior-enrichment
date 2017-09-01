import axios from 'axios';
import history from '../history'
// import socket from '../socket';

// ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

// ACTION CREATORS

export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function addCampus(campus) {
  const action = { type: ADD_CAMPUS, campus };
  return action;
}

export function deleteCampus(campus) {
  const action = { type: DELETE_CAMPUS, campus };
  return action;
}

// THUNK CREATORS

export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

export function postCampus(campus) {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        // socket.emit('new-campus', newCampus);
        const action = addCampus(newCampus);
        dispatch(action);
        history.push('/campuses');
      });
  };
}

export function editCampus(origCampus) {
  return function thunk(dispatch) {
    return axios.put(`/api/campus/${origCampus.id}`)
      .then(res => res.data)
      .then(editedCampus => {
        dispatch(deleteCampus(origCampus));
        dispatch(addCampus(editedCampus));
      });
  };
}

export function removeCampus(campus) {
  return function thunk(dispatch) {
    return axios.delete(`/api/campus/${campus.id}`)
      .then(() => {
        const action = deleteCampus(campus);
        dispatch(action);
      });
  };
}

// REDUCER

export default function campusesReducer(state = [], action) {

  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case ADD_CAMPUS:
      return [...state, action.campus];

      case DELETE_CAMPUS:
      return state.filter(campus =>
          campus.id !== action.campus.id)

    default:
      return state;
  }

}
