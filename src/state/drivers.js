import {createSelector} from 'reselect';

// SELECTORS
export const getResponses = (state: AppState) => state.responses;
export const getResponseById = (id: string) => (state: AppState): Response =>
  getResponses(state)[id];
export const getResponsesByIds = (ids: string[]) => (
  state: AppState,
): Responses => ids.map((id: string) => getResponseById(id)(state));
export const getResponsesByVacancy = (id: string) => (
  state: AppState,
): Responses => {
  const responsesArray = Object.values(getResponses(state));
  const filteredArray = responsesArray.filter(
    (response) => response.vacancyId === id,
  );
  return filteredArray;
};
export const getResponsesByVacancyId = (id: string) => {
  return createSelector(getResponses, (responses: ResponsesState) =>
    Object.values(responses).filter((item) => item.vacancyId === id),
  );
};

// ACTION TYPES
const RESPONSES_SET = 'RESPONSES_SET';
const RESPONSE_VIEWED = 'RESPONSE_VIEWED';
const RESPONSE_DECLINED = 'RESPONSE_DECLINED';
const RESPONSE_ACCEPTED = 'RESPONSE_ACCEPTED';
const RESPONSE_DELETED = 'RESPONSE_DELETED';

type ACTION =
  | {
      type: typeof RESPONSES_SET,
      payload: Responses,
    }
  | {
      type: typeof RESPONSE_VIEWED,
      payload: string,
    }
  | {
      type: typeof RESPONSE_DECLINED,
      payload: string,
    }
  | {
      type: typeof RESPONSE_ACCEPTED,
      payload: string,
    }
  | {
      type: typeof RESPONSE_DELETED,
      payload: string,
    };

// ACTIONS
export const responsesSet = (payload: Responses | null) => ({
  type: RESPONSES_SET,
  payload,
});

export const responseViewed = (payload: string) => ({
  type: RESPONSE_VIEWED,
  payload,
});

export const responseDeclined = (payload: string) => ({
  type: RESPONSE_DECLINED,
  payload,
});

export const responseAccepted = (payload: string) => ({
  type: RESPONSE_ACCEPTED,
  payload,
});

export const responseDeleted = (id: string) => ({
  type: RESPONSE_DELETED,
  payload: id,
});

const INITIAL_STATE: ResponsesState = {};

// REDUCER
export default (state = INITIAL_STATE, action: ACTION) => {
  switch (action.type) {
    case RESPONSES_SET:
      const responses: ResponsesState = {};
      if (action.payload) {
        action.payload.forEach(
          (response) => (responses[response.id] = response),
        );
      }
      return responses;
    case RESPONSE_VIEWED:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload], // тут запутался как тип вывести (код рабочий) - возможно добавить "suppressImplicitAnyIndexErrors": true в tsconfig.json
          viewed: true,
        },
      };
    case RESPONSE_DECLINED:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          declined: new Date(),
          viewed: true,
        },
      };
    case RESPONSE_ACCEPTED:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          accepted: new Date(),
          viewed: true,
        },
      };
    case RESPONSE_DELETED:
      const responsesState = {...state};
      delete responsesState[action.payload];
      return responsesState;
    default:
      return state;
  }
};
