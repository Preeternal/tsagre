import axios from 'axios';

import {Alert} from 'react-native';

export const configureAxios = () => {
  axios.defaults.baseURL = 'http://ergast.com/api/f1';
  axios.defaults.timeout = 30000;
  axios.defaults.headers.common.Accept = 'application/json';
  axios.defaults.headers.common['Accept-Language'] = 'en';
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  axios.interceptors.response.use(
    async function (response) {
      if (response?.status < 400) {
        console.log('response', response?.status, response);
      }

      return response;
    },
    function (error) {
      if (error.response) {
        if (error.response.status === 401) {
          Alert.alert(
            `error ${error.response.status}`,
            `${error?.message ? error?.message : ''}\n${
              error?.response?.data?.message || ''
            }`,

            [
              {
                text: 'OK',
                onPress: () => {},
              },
            ],
            {cancelable: false},
          );
        }
        if (
          error.response.status === 403 ||
          error.response.status === 404 ||
          error.response.status === 500
        ) {
          Alert.alert(
            `error ${error.response.status}`,
            `${error?.message ? error?.message : ''}\n${
              error?.response?.data?.message || ''
            }`,

            [
              {
                text: 'OK',
                onPress: () => {},
              },
            ],
            {cancelable: false},
          );
        }
        console.log(error.response);
        // console.log(
        //   error?.message,
        //   error?.response?.data?.message,
        //   error?.response?.data?.errors,
        // );
      } else if (error?.request) {
        console.log('error request', error?.request);
        Alert.alert(
          'error request',
          'Timeout server error',
          [
            {
              text: 'OK',
              onPress: () => {},
            },
          ],
          {cancelable: false},
        );
      } else {
        console.log('Error', error?.message);
        Alert.alert(
          'Error',
          error?.message
            ? error?.message
            : 'Something went wrong, please try again later',

          [
            {
              text: 'OK',
              onPress: () => {},
            },
          ],
          {cancelable: false},
        );
      }
      return Promise.reject(error);
    },
  );
};
