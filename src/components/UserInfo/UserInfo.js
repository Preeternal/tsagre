/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useSelector} from 'react-redux';

import {
  Container,
  CompanyLogo,
  Description,
  VacancyName,
  VacancySalary,
  VacancyHirer,
  Statistics,
  NumberContainer,
  VacancyNumber,
  PlusNumberWrapper,
  PlusNumber,
  ViewsContainer,
  VacancyViews,
} from './styles';

export const UserInfo = ({driver, disabled = true, onPress = () => {}}) => {
  // const company = useSelector(getCompanyById(vacancy.company));
  return (
    <Container
      onPress={onPress}
      // disabled={disabled ? true : false}
    >
      <Description>
        <VacancyName>{`${driver?.givenName} ${driver?.familyName}`}</VacancyName>
        {/* <VacancySalary>
        {vacancy?.salary?.length === 2
          ? `${vacancy?.salary[0].toLocaleString('ru-RU')} - ${
              vacancy?.salary[1] && vacancy?.salary[1].toLocaleString('ru-RU')
            } руб.`
          : `от ${
              vacancy?.salary[0].toLocaleString('ru-RU') ||
              (vacancy?.salary[1] && vacancy?.salary[1].toLocaleString('ru-RU'))
            } руб.` || ''}
      </VacancySalary>
      <VacancyHirer>{company.name}</VacancyHirer> */}
      </Description>
      {/* <Statistics>
      <NumberContainer>
        <VacancyNumber>{vacancy?.number || ''}</VacancyNumber>
        {vacancy.plusNumber && (
          <PlusNumberWrapper>
            <PlusNumber>+{vacancy.plusNumber}</PlusNumber>
          </PlusNumberWrapper>
        )}
      </NumberContainer>
      <ViewsContainer>
        <VacancyViews>{vacancy.views}</VacancyViews>
      </ViewsContainer>
      <ViewsContainer>
        <VacancyViews>{daysString}</VacancyViews>
      </ViewsContainer>
    </Statistics> */}
    </Container>
  );
  // : (
  //   <></>
  // );
};
