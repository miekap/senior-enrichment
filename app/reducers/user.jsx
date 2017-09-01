//THIS IS NOTHING REALLY

import axios from 'axios';
// import socket from '../socket';

// ACTION TYPES

const ADD_USER = 'ADD_USER';

// ACTION CREATORS

export function addUser(user) {
  const action = { type: ADD_USER, user };
  return action;
}

// REDUCER

export default function userReducer(state = [], action) {

  switch (action.type) {

    case ADD_USER:
      return action.user;

    default:
      return state;
  }

}
