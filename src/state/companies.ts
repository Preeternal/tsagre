import { Company, Companies, AppState, CompaniesState } from 'Interfaces';

// SELECTORS
export const getCompanies = (state: AppState) => state.companies;
export const getCompanyById = (id: string) => (state: AppState): Company =>
  getCompanies(state)[id];

// ACTION TYPES
const COMPANY_SET = 'COMPANY_SET';
const COMPANIES_SET = 'COMPANIES_SET';
const COMPANY_DELETED = 'COMPANY_DELETED';
const COMPANY_EDITED = 'COMPANY_EDITED';

type ACTION =
  | {
      type: typeof COMPANY_SET;
      payload: Company;
    }
  | {
      type: typeof COMPANIES_SET;
      payload: Companies;
    }
  | {
      type: typeof COMPANY_DELETED;
      payload: string;
    }
  | {
      type: typeof COMPANY_EDITED;
      payload: Partial<Company> & {
        id: string;
      };
    };

// ACTIONS
export const companySet = (payload: Company) => ({
  type: COMPANY_SET,
  payload,
});

export const companiesSet = (payload: Companies | null) => ({
  type: COMPANIES_SET,
  payload,
});

export const companyDeleted = (id: string) => ({
  type: COMPANY_DELETED,
  payload: id,
});

export const companyEdited = (
  payload: Partial<Company> & {
    id: string;
  },
) => ({
  type: COMPANY_EDITED,
  payload,
});

const INITIAL_STATE: CompaniesState = {};

// REDUCER
export default (state = INITIAL_STATE, action: ACTION) => {
  switch (action.type) {
    case COMPANIES_SET:
      const companies: CompaniesState = {};
      if (action.payload)
        action.payload.forEach((company) => (companies[company.id] = company));
      return companies;
    case COMPANY_SET:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case COMPANY_EDITED:
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], ...action.payload },
      };
    case COMPANY_DELETED:
      const companiesState = { ...state };
      delete companiesState[action.payload];
      return companiesState;
    default:
      return state;
  }
};
