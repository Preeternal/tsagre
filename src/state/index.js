import {combineReducers} from 'redux';
import drivers from './drivers';
import standings from './standings';

export const rootReducer = combineReducers({
  drivers,
  standings,
});
