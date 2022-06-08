import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {Linking} from 'react-native';

import {selectDriverById} from '../../state/drivers';

import {
  Container,
  Description,
  DriverId,
  DriverName,
  DriverNationality,
  Statistics,
  WikiContainer,
  WikiWrapper,
  Wiki,
  ViewsContainer,
  Birth,
} from './styles';

export const DriverInfo = ({
  constructor,
  driverId,
  disabled = true,
  onPress,
}) => {
  const driver = useSelector(selectDriverById(driverId));
  const getWikiInfo = useCallback(() => {
    if (driver?.url) {
      Linking.openURL(driver?.url);
    }
    if (constructor?.url) {
      Linking.openURL(constructor?.url);
    }
  }, [driver, constructor]);
  return (
    <Container onPress={onPress} disabled={!disabled}>
      <Description>
        <DriverId>{constructor.id || driverId || ''}</DriverId>
        <DriverName>{`${constructor?.givenName || driver?.givenName || ''} ${
          driver?.familyName || ''
        }`}</DriverName>
        <DriverNationality>
          {constructor?.nationality || driver?.nationality || ''}
        </DriverNationality>
      </Description>
      <Statistics>
        <WikiContainer>
          <WikiWrapper onPress={getWikiInfo} disabled={disabled}>
            <Wiki>wiki</Wiki>
          </WikiWrapper>
        </WikiContainer>
        {driver?.dateOfBirth && (
          <ViewsContainer>
            <Birth>birth</Birth>
          </ViewsContainer>
        )}
        <ViewsContainer>
          <Birth>{driver?.dateOfBirth || ''}</Birth>
        </ViewsContainer>
      </Statistics>
    </Container>
  );
};
