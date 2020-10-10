import {combineReducers} from 'redux';
import drivers from './drivers';
import standigs from './standings';
import quantity from './quantity';

export const rootReducer = combineReducers({
  drivers,
  standigs,
  quantity,
});
