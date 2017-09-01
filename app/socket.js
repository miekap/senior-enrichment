import io from 'socket.io-client';
import store, { getCampus, getStudent } from './store';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('Connected to socket server.');

  socket.on('new-campus', campus => {
    store.dispatch(getCampus(campus));
  });

  socket.on('new-student', student => {
    store.dispatch(getStudent(student));
  });

});

export default socket;
