import { store } from './store';
import {
  loginFunction,
  setMyUserFunction,
  // signUp,
  fetchMyUserFunction,
  updateMyUserFunction,
  getMyCompaniesFunction,
  deleteMyCompanyByIdFunction,
  createCompanyFunction,
  editCompanyFunction,
  getMyVacanciesFunction,
  createVacancyFunction,
  editVacancyFunction,
  deleteVacancyByIdFunction,
  getResponsesFunction,
  viewedResponseFunction,
  declinedResponseFunction,
  acceptedResponseFunction,
  getMyBillsFunction,
  createBillFunction,
} from '../services/functions';
import {
  companiesSet,
  companyDeleted,
  companySet,
  companyEdited,
} from './companies';
import { myUserSet, myUserUpdated } from './user';
import {
  vacanciesSet,
  vacancySet,
  getVacanciesByCompanyId,
  vacancyEdited,
  vacancyDeleted,
} from './vacancies';
import {
  responsesSet,
  responseViewed,
  responseDeclined,
  responseAccepted,
  getResponsesByVacancyId,
  responseDeleted,
} from './responses';
import { billsSet, billSet } from './bills';
import { User, Company, Vacancy, Bill } from 'Interfaces';

// THUNKS USER
export const login = async (email: string, password: string | number) => {
  try {
    const { data } = await loginFunction(email, password);

    if (data.success) {
      store.dispatch(myUserSet(data.payload as User));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const setMyUser = async (user: User, password: string | number) => {
  try {
    const { data } = await setMyUserFunction(user, password);
    // const { data } = await signUp(user, password);
    if (data.success) {
      store.dispatch(myUserSet(data.payload as User));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const fetchMyUser = async (userId: string) => {
  try {
    const { data } = await fetchMyUserFunction(userId);

    if (data.success) {
      store.dispatch(myUserSet(data.payload as User));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const updateMyUser = async (params: {
  name?: string;
  surname?: string;
  phone?: string;
  pushToken?: string;
  balance?: number;
}) => {
  try {
    const { data } = await updateMyUserFunction(params);

    if (data.success) {
      store.dispatch(myUserUpdated(params));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

// THUNKS COMPANIES
export const fetchMyCompanies = async () => {
  try {
    const { data } = await getMyCompaniesFunction();
    if (data.success) {
      store.dispatch(companiesSet(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const deleteMyCompanyById = async (id: string) => {
  try {
    const { data } = await deleteMyCompanyByIdFunction(id);
    if (data.success) {
      store.dispatch(companyDeleted(data.payload));
      const vacancies = getVacanciesByCompanyId(id)(store.getState());
      vacancies.forEach((vacancy) => {
        store.dispatch(vacancyDeleted(vacancy.id));
        const responses = getResponsesByVacancyId(vacancy.id)(store.getState());
        responses.forEach((response) =>
          store.dispatch(responseDeleted(response.id)),
        );
      });
      // fetchMyCompanies();
      // fetchMyVacancies();
      // fetchMyVacanciesResponses();
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const createCompany = async (company: Company) => {
  try {
    const { data } = await createCompanyFunction(company);
    if (data.success) {
      store.dispatch(companySet(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const editCompany = async (
  company: Partial<Company> & {
    id: string;
  },
) => {
  try {
    const { data } = await editCompanyFunction(company);
    if (data.success) {
      store.dispatch(companyEdited(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

// THUNKS BILLS
export const fetchMyBills = async () => {
  try {
    const { data } = await getMyBillsFunction();
    if (data.success) {
      store.dispatch(billsSet(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const createBill = async (
  bill: Partial<Bill> & {
    entity: string;
    inn: number;
    kpp: number;
    sum: number;
    address?: string[];
  },
) => {
  try {
    const { data } = await createBillFunction(bill);
    if (data.success) {
      store.dispatch(billSet(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

// THUNKS VACANCIES
export const fetchMyVacancies = async () => {
  try {
    const { data } = await getMyVacanciesFunction();
    if (data.success) {
      store.dispatch(vacanciesSet(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const createVacancy = async (
  vacancy: Partial<Vacancy> & {
    maxDate?: Date;
    isPremium?: boolean;
    isStandard?: boolean;
    fiveUp?: Date | string;
    fixedDate?: Date;
    highlightedDate?: Date;
    company: string;
    address: string;
    category: string;
    specializations: string[];
    textDescription: string;
    name: string;
    schedule: number[];
    experience: string;
    salary: number[];
    date: Date;
    contactPerson?: string;
    contactPersonPhone?: string;
  },
) => {
  try {
    const { data } = await createVacancyFunction(vacancy);
    if (data.success) {
      store.dispatch(vacancySet(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const editVacancy = async (
  vacancy: Partial<Vacancy> & {
    id: string;
  },
) => {
  try {
    const { data } = await editVacancyFunction(vacancy);
    if (data.success) {
      store.dispatch(vacancyEdited(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const deleteVacancyById = async (id: string) => {
  try {
    const { data } = await deleteVacancyByIdFunction(id);
    if (data.success) {
      store.dispatch(vacancyDeleted(data.payload));
      const responses = getResponsesByVacancyId(data.payload)(store.getState());
      responses.forEach((response) =>
        store.dispatch(responseDeleted(response.id)),
      );
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

//SAGAS

// THUNKS RESPONSES
export const fetchMyVacanciesResponses = async () => {
  try {
    const { data } = await getResponsesFunction();
    if (data.success) {
      store.dispatch(responsesSet(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const makeResponseViewed = async (id: string) => {
  try {
    const { data } = await viewedResponseFunction(id);
    if (data.success) {
      store.dispatch(responseViewed(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const makeResponseDeclined = async (id: string) => {
  try {
    const { data } = await declinedResponseFunction(id);
    if (data.success) {
      store.dispatch(responseDeclined(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const makeResponseAccepted = async (id: string) => {
  try {
    const { data } = await acceptedResponseFunction(id);
    if (data.success) {
      store.dispatch(responseAccepted(data.payload));
    } else return Promise.reject(new Error(data.error));
  } catch (e) {
    return Promise.reject(e);
  }
};
