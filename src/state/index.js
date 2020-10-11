import {combineReducers} from 'redux';
import drivers from './drivers';
import standings from './standings';
import quantity from './quantity';

export const rootReducer = combineReducers({
  drivers,
  standings,
  quantity,
});
