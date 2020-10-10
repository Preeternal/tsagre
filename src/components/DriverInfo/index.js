import React, {useCallback} from 'react';
import {Linking} from 'react-native';

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

export const DriverInfo = ({driver, disabled = true, onPress}) => {
  const getWikiInfo = useCallback(() => {
    if (driver?.url) {
      Linking.openURL(driver?.url);
    }
  }, [driver]);
  return (
    <Container onPress={onPress} disabled={!disabled}>
      <Description>
        <DriverId>{driver?.driverId || ''}</DriverId>
        <DriverName>{`${driver?.givenName || ''} ${
          driver?.familyName || ''
        }`}</DriverName>
        <DriverNationality>{driver?.nationality || ''}</DriverNationality>
      </Description>
      <Statistics>
        <WikiContainer>
          <WikiWrapper onPress={getWikiInfo} disabled={disabled}>
            <Wiki>wiki</Wiki>
          </WikiWrapper>
        </WikiContainer>
        <ViewsContainer>
          <Birth>birth</Birth>
        </ViewsContainer>
        <ViewsContainer>
          <Birth>{driver?.dateOfBirth || ''}</Birth>
        </ViewsContainer>
      </Statistics>
    </Container>
  );
};
