import axios from 'axios';

const url = 'http://ergast.com/api/f1';

export const fetchDrivers = () => {
  return {data: {success: true, payload: true, error: false}};
};
