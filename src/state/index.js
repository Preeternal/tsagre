import {combineReducers} from 'redux';
import drivers from './drivers';
import standigs from './standings';

export const rootReducer = combineReducers({
  drivers,
  standigs,
});
