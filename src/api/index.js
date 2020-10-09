import axios from 'axios';
import {Alert} from 'react-native';

const url = 'http://ergast.com/api/f1';
const errorText = 'Something went wrong, please try again later';

export const fetchDrivers = async (offset = 0) => {
  const limit = 10;
  try {
    const response = await axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${url}/drivers.json?limit=${limit}&offset=${offset}`,
    });
    if (
      response.status === 200 &&
      response.data?.MRData?.DriverTable?.Drivers
    ) {
      console.log('drivers', response.data?.MRData?.DriverTable?.Drivers);
      return {
        success: true,
        payload: response.data?.MRData?.DriverTable?.Drivers,
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
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${url}/drivers/${id}/driverStandings.json`,
    });
    if (response.status === 200 && response.data?.MRData?.StandingsTable) {
      console.log('StandingsTable', response.data?.MRData?.StandingsTable);
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
