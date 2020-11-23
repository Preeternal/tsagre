import axios from 'axios';
import {Alert} from 'react-native';
// import {gql} from '@apollo/client';

const url = 'http://ergast.com/api/f1';
const errorText = 'Something went wrong, please try again later';

export const fetchDrivers = async (offset = 0, limit = 20) => {
  try {
    const response = await axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${url}/drivers.json?limit=${limit}&offset=${offset}`,
    });
    if (
      response.status === 200 &&
      response.data?.MRData?.DriverTable?.Drivers
    ) {
      return {
        success: true,
        payload: response.data?.MRData?.DriverTable?.Drivers,
        quantity: response.data?.MRData?.total,
        error: null,
      };
    } else {
      Alert.alert(errorText);
      return {success: false, error: errorText};
    }
  } catch (e) {
    console.warn(e);
    Alert.alert(errorText);
    return {success: false, error: errorText};
  }
};

export const fetchDriverStandings = async (id) => {
  try {
    const response = await axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${url}/drivers/${id}/driverStandings.json`,
    });
    if (response.status === 200 && response.data?.MRData?.StandingsTable) {
      return {
        success: true,
        payload: response.data?.MRData?.StandingsTable,
        error: null,
      };
    } else {
      Alert.alert(errorText);
      return {success: false, error: errorText};
    }
  } catch (e) {
    console.warn(e);
    Alert.alert(errorText);
    return {success: false, error: errorText};
  }
};
