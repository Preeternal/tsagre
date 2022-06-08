import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Card} from '../../components/common';
import {DriverInfo} from '../../components';
import {FooterButton, ButtonText} from './styles';

const Driver = ({route}) => {
  const {driverId} = route.params;
  const navigation = useNavigation();

  return (
    <>
      <Card>
        <DriverInfo driverId={driverId} disabled={false} />
      </Card>
      <FooterButton
        type="blue"
        onPress={() =>
          navigation.navigate('Standings', {
            driverId,
          })
        }>
        <ButtonText>Таблица заездов</ButtonText>
      </FooterButton>
    </>
  );
};

export {Driver};
