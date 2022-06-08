import {fetchDrivers, fetchDriverStandings} from '../api';
import {
  driversLoadStarted,
  driversLoadSuccess,
  driversLoadFailure,
} from './drivers';

import {
  standingSet,
  standingLoadStarted,
  standingLoadFailure,
} from './standings';

// DRIVERS THUNK
export const getDrivers = (offset = 0, limit = 20) => async (dispatch) => {
  dispatch(driversLoadStarted());
  try {
    const response = await fetchDrivers({offset, limit});
    dispatch(driversLoadSuccess(response.data?.MRData));
  } catch (e) {
    console.log(e?.toJSON());
    dispatch(driversLoadFailure(e?.message));
  }
};

// STANDING THUNK
export const getStandings = (id, props) => async (dispatch) => {
  dispatch(standingLoadStarted(id));
  try {
    const response = await fetchDriverStandings(id, {
      offset: props?.offset || 0,
      limit: props?.limit || 20,
    });
    dispatch(standingSet(response?.data?.MRData));
  } catch (e) {
    console.log(e?.toJSON());
    dispatch(standingLoadFailure({id: id, error: e?.message}));
  }
};
