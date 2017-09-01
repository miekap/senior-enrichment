import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';
import user from './user';
import newCampus from './newCampus';
import newStudent from './newStudent';

const rootReducer = combineReducers({
  campuses,
  students,
  user,
  newCampus,
  newStudent
});

export default rootReducer;

export * from './campuses';
export * from './students';
export * from './user';
export * from './newCampus';
export * from './newStudent';
