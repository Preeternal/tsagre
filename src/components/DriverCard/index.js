import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Card} from '../common';
import {DriverInfo} from '../DriverInfo';

const DriverCard = React.memo(({driverId}) => {
  const navigation = useNavigation();

  return (
    <Card>
      <DriverInfo
        onPress={() =>
          navigation.navigate('Driver', {
            driverId,
          })
        }
        driverId={driverId}
      />
    </Card>
  );
});

export {DriverCard};
