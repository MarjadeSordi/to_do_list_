import newTaskWork from './newTaskWork';
import newTaskPersonal from './newTaskPersonal';
import { combineReducers } from 'redux';

export default combineReducers({
  newTaskPersonal,
  newTaskWork,
});
