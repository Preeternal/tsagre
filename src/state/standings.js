// SELECTORS
export const getStandingsSelector = (state) => state.standings;
export const getStandingById = (id) => (state) =>
  getStandingsSelector(state)[id];

// ACTION TYPES
const STANDING_SET = 'STANDING_SET';

// ACTIONS
export const standingSet = (payload) => ({
  type: STANDING_SET,
  payload,
});

const INITIAL_STATE = {};

// REDUCER
export default (state = INITIAL_STATE, action: ACTION) => {
  switch (action.type) {
    case STANDING_SET:
      return {
        ...state,
        [action.payload.driverId]: action.payload,
      };
    default:
      return state;
  }
};
