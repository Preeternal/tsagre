// SELECTORS

export const getStandingsSelector = (state) => state.standings;
export const getStandingById = (id) => (state) =>
  getStandingsSelector(state)[id]?.StandingsTable?.StandingsLists;
export const selectStandingById = (id) => (state) =>
  getStandingsSelector(state)[id] || {
    loading: false,
    offset: 0,
    total: 0,
    data: [],
    error: '',
  };

// ACTION TYPES

const STANDING_LOAD_STARTED = 'STANDING_LOAD_STARTED';
const STANDING_LOAD_SUCCESS = 'STANDING_LOAD_SUCCESS';
const STANDING_LOAD_FAILURE = 'STANDING_LOAD_FAILURE';

// ACTIONS
export const standingLoadStarted = (payload) => ({
  type: STANDING_LOAD_STARTED,
  payload,
});

export const standingSet = (payload) => ({
  type: STANDING_LOAD_SUCCESS,
  payload,
});

export const standingLoadFailure = (payload) => ({
  type: STANDING_LOAD_FAILURE,
  payload,
});

const INITIAL_STATE = {};

// REDUCER
export default (state = INITIAL_STATE, action: ACTION) => {
  switch (action.type) {
    case STANDING_LOAD_STARTED:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          loading: true,
        },
      };
    case STANDING_LOAD_SUCCESS:
      const offset = Number(action.payload?.offset);
      const prevStateData =
        offset === 0
          ? []
          : state[action.payload.StandingsTable?.driverId]?.data || [];
      return {
        ...state,
        [action.payload.StandingsTable?.driverId]: {
          ...action.payload,
          offset: offset,
          total: Number(action.payload?.total),
          data: [
            ...prevStateData,
            ...action.payload.StandingsTable?.StandingsLists,
          ],
          loading: false,
        },
      };
    case STANDING_LOAD_FAILURE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          error: action.payload.error,
          loading: false,
        },
      };
    default:
      return state;
  }
};
