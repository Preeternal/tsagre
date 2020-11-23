import axios from 'axios';
import {Alert} from 'react-native';
import {gql} from '@apollo/client';

import {apiUrl} from '../config';

const errorText = 'Something went wrong, please try again later';

export const fetchDrivers = async (offset = 0, limit = 20) => {
  try {
    const response = await axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${apiUrl}drivers.json?limit=${limit}&offset=${offset}`,
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

// const Drivers = (limit, offset) => gql`
//   query Drivers {
//     person(limit, offset) @rest(type: "Drivers", path: "drivers.json?limit=${limit}&offset=${offset}") {
//       name
//     }
//   }
// `;

// console.log('drivers', Drivers(10, 0));

export const fetchDriverStandings = async (id) => {
  try {
    const response = await axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${apiUrl}drivers/${id}/driverStandings.json`,
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
