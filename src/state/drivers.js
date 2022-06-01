// SELECTORS
export const selectDrivers = (state) => state.drivers;
export const getDriverById = (id) => (state) => selectDrivers(state)[id];
export const getDriversByIds = (ids: string[]) => (state) =>
  ids.map((id) => getDriverById(id)(state));

// ACTION TYPES
const DRIVERS_SET = 'DRIVERS_SET';

// ACTIONS
export const driversSet = (payload) => ({
  type: DRIVERS_SET,
  payload,
});

const INITIAL_STATE = {};

// REDUCER
export default (state = INITIAL_STATE, action: ACTION) => {
  switch (action.type) {
    case DRIVERS_SET:
      const drivers = {...state};
      action.payload.forEach((driver) => (drivers[driver.driverId] = driver));
      return drivers;
    default:
      return state;
  }
};
