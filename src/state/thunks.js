import {store} from './store';
import {fetchDrivers, fetchDriverStandings} from '../api';
import {driversSet} from './drivers';
import {quantitySet, getQuantity} from './quantity';

import {standingSet} from './standings';

// DRIVERS THUNK
export const getDrivers = async (offset) => {
  const driversQuantity = getQuantity(store.getState());
  try {
    const data = await fetchDrivers(offset);
    if (data.success) {
      store.dispatch(driversSet(data.payload));
      if (!driversQuantity) {
        store.dispatch(quantitySet(data.quantity));
      }
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
    if (data.success) {
      store.dispatch(standingSet(data.payload));
    } else {
      return Promise.reject(new Error(data.error));
    }
  } catch (e) {
    return Promise.reject(e);
  }
};
