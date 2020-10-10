// SELECTORS
export const getQuantity = (state) => state.quantity;

// ACTION TYPES
const QUANTITY_SET = 'QUANTITY_SET';

// ACTIONS
export const quantitySet = (payload) => ({
  type: QUANTITY_SET,
  payload,
});

const INITIAL_STATE = null;

// REDUCER
export default (state = INITIAL_STATE, action: ACTION) => {
  switch (action.type) {
    case QUANTITY_SET:
      return action.payload;
    default:
      return state;
  }
};
