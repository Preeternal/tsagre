/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useSelector } from 'react-redux';
import 'number-to-locale-string';

import { getDays, getDaysString } from '../../../services/helpers';
import { Image } from 'react-native';
import { getCompanyById } from '../../../state/companies';
import images from '../../../assets/images';
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
import { theme } from '../../../styles';
import { Vacancy } from 'Interfaces';

interface Props {
  vacancy: Vacancy;
  disabled?: boolean;
  onPress?: () => void;
}

export const VacancyDescription = ({ vacancy, disabled, onPress }: Props) => {
  const days = getDays(vacancy.date);
  const daysString = getDaysString(days);
  const { green, red, gray } = theme.colors.text;
  const tintColor = days === 0 ? green : days !== 1 ? red : gray;
  const company = useSelector(getCompanyById(vacancy.company));
  return company ? (
    <Container onPress={onPress} disabled={disabled ? true : false}>
      <CompanyLogo
        source={{
          uri: company.logo,
        }}
      />
      <Description>
        <VacancyName>{vacancy.name}</VacancyName>
        <VacancySalary>
          {vacancy?.salary?.length === 2
            ? `${vacancy?.salary[0].toLocaleString('ru-RU')} - ${
                vacancy?.salary[1] && vacancy?.salary[1].toLocaleString('ru-RU')
              } руб.`
            : `от ${
                vacancy?.salary[0].toLocaleString('ru-RU') ||
                (vacancy?.salary[1] &&
                  vacancy?.salary[1].toLocaleString('ru-RU'))
              } руб.` || ''}
        </VacancySalary>
        <VacancyHirer>{company.name}</VacancyHirer>
      </Description>
      <Statistics>
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
          <Image source={images.eye} style={{ marginLeft: 4 }} />
        </ViewsContainer>
        <ViewsContainer>
          <VacancyViews style={{ color: tintColor }}>{daysString}</VacancyViews>
          <Image
            source={images.littleArrowUp}
            style={{ tintColor, marginLeft: 7 }}
          />
        </ViewsContainer>
      </Statistics>
    </Container>
  ) : (
    <></>
  );
};
