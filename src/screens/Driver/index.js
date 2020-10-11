import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {getStandings} from '../../state/thunks';
import {Card} from '../../components/common';
import {DriverInfo} from '../../components';
import {FooterButton, ButtonText} from './styles';

const Driver = ({route}) => {
  const {driver} = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    if (driver?.driverId) {
      getStandings(driver?.driverId);
    }
  }, [driver]);

  return (
    <>
      <Card>
        <DriverInfo driver={driver} disabled={false} />
      </Card>
      <FooterButton
        type="blue"
        onPress={() =>
          navigation.navigate('Standings', {
            driver,
          })
        }>
        <ButtonText>Таблица заездов</ButtonText>
      </FooterButton>
    </>
  );
};

export {Driver};
