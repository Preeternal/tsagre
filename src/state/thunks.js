import {store} from './store';
import {fetchDrivers, fetchDriverStandings} from '../api';
import {driversSet} from './drivers';
import {standingSet} from './standings';

// DRIVERS THUNK
export const getDrivers = async (offset) => {
  try {
    const data = await fetchDrivers(offset);
    if (data.success) {
      store.dispatch(driversSet(data.payload));
    } else {
      return Promise.reject(new Error(data.error));
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

// STANDING THUNK
export const getStandings = async (id) => {
  try {
    const data = await fetchDriverStandings(id);
    console.log('DATA', data);
    if (data.success) {
      store.dispatch(standingSet(data.payload));
    } else {
      return Promise.reject(new Error(data.error));
    }
  } catch (e) {
    return Promise.reject(e);
  }
};
