import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Card} from '../common';
import {DriverInfo} from '../DriverInfo';

const DriverCard = ({driver}) => {
  const navigation = useNavigation();

  return (
    <Card>
      <DriverInfo
        onPress={() =>
          navigation.navigate('Driver', {
            driver,
          })
        }
        driver={driver}
      />
    </Card>
  );
};

export {DriverCard};
