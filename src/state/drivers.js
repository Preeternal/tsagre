// SELECTORS
export const selectDriversAllFields = (state) => state.drivers;
export const selectDrivers = (state) => state.drivers.data;
export const selectDriversOffset = (state) => state.drivers.offset;
export const selectDriversCount = (state) => state.drivers.total;
export const selectDriverById = (id) => (state) =>
  selectDrivers(state).find((driver) => driver.driverId === id);
export const getDriversByIds = (ids: string[]) => (state) =>
  ids.map((id) => selectDriverById(id)(state));

// ACTION TYPES
const DRIVERS_LOAD_STARTED = 'DRIVERS_LOAD_STARTED';
const DRIVERS_LOAD_SUCCESS = 'DRIVERS_LOAD_SUCCESS';
const DRIVERS_LOAD_FAILURE = 'DRIVERS_LOAD_FAILURE';

// ACTIONS
export const driversLoadStarted = () => ({
  type: DRIVERS_LOAD_STARTED,
});

export const driversLoadSuccess = (payload) => ({
  type: DRIVERS_LOAD_SUCCESS,
  payload,
});

export const driversLoadFailure = (payload) => ({
  type: DRIVERS_LOAD_FAILURE,
  payload,
});

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false,
  offset: 0,
  total: 0,
};

// REDUCER
export default (state = INITIAL_STATE, action: ACTION) => {
  switch (action.type) {
    case DRIVERS_LOAD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case DRIVERS_LOAD_SUCCESS:
      const offset = Number(action.payload?.offset);
      const prevStateData = offset === 0 ? [] : state.data;
      return {
        ...state,
        data: [...prevStateData, ...action.payload?.DriverTable?.Drivers],
        error: null,
        loading: false,
        offset: offset,
        total: Number(action.payload?.total),
      };
    case DRIVERS_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
