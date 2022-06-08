import axios from 'axios';

export const fetchDrivers = async (params) =>
  await axios('/drivers.json', {
    params,
  });

export const fetchDriverStandings = async (id, params) =>
  await axios(`/drivers/${id}/driverStandings.json`, {
    params,
  });
