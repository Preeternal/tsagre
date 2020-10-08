import { createSelector } from 'reselect';
import { Vacancy, Vacancies, AppState, VacanciesState } from 'Interfaces';

// SELECTORS
export const getVacancies = (state: AppState) => state.vacancies;
export const getVacancyById = (id: string) => (state: AppState): Vacancy =>
  getVacancies(state)[id];
export const getVacanciesByCompanyId = (id: string) => {
  return createSelector(getVacancies, (vacancies: VacanciesState) =>
    Object.values(vacancies).filter((item) => item.company === id),
  );
};

// export const getVacancyById = (
//   state: AppState,
//   id: string,
// ): Vacancy | undefined => getVacancies(state)[id];

// ACTION TYPES
const VACANCY_SET = 'VACANCY_SET';
const VACANCIES_SET = 'VACANCIES_SET';
const VACANCY_DELETED = 'VACANCY_DELETED';
const VACANCY_EDITED = 'VACANCY_EDITED';

type ACTION =
  | {
      type: typeof VACANCY_SET;
      payload: Vacancy;
    }
  | {
      type: typeof VACANCIES_SET;
      payload: Vacancies;
    }
  | {
      type: typeof VACANCY_DELETED;
      payload: string;
    }
  | {
      type: typeof VACANCY_EDITED;
      payload: Partial<Vacancy> & {
        id: string;
      };
    };

// ACTIONS
export const vacanciesSet = (payload: Vacancies | null) => ({
  type: VACANCIES_SET,
  payload,
});

export const vacancySet = (payload: Vacancy) => ({
  type: VACANCY_SET,
  payload,
});

export const vacancyDeleted = (id: string) => ({
  type: VACANCY_DELETED,
  payload: id,
});

export const vacancyEdited = (
  payload: Partial<Vacancy> & {
    id: string;
  },
) => ({
  type: VACANCY_EDITED,
  payload,
});

const INITIAL_STATE: Vacancies = [];

// REDUCER
export default (state = INITIAL_STATE, action: ACTION) => {
  switch (action.type) {
    case VACANCIES_SET:
      const vacancies: VacanciesState = {};
      if (action.payload)
        action.payload.forEach((vacancy) => (vacancies[vacancy.id] = vacancy));
      return vacancies;
    case VACANCY_SET:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case VACANCY_DELETED:
      const vacanciesState = { ...state };
      delete vacanciesState[action.payload];
      return vacanciesState;
    case VACANCY_EDITED:
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], ...action.payload },
      };
    default:
      return state;
  }
};
