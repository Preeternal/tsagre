/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
// import {useNavigation} from '@react-navigation/native';
import {Card} from '../common';
import {} from '../';

// import {
//   ButtonsContainer,
//   ButtonsFixedContainer,
//   Fixed,
//   FixedText,
//   RocketButton,
//   StarButton,
//   ButtonText,
//   UpButton,
// } from './styles';

const UserCard = ({driver}) => {
  // const navigation = useNavigation();

  return (
    <Card>
      {/* <VacancyDescription
        onPress={() =>
          navigation.navigate('Responses', {
            driver,
          })
        }
        vacancy={driver}
      /> */}
    </Card>
  );
};

export {UserCard};
