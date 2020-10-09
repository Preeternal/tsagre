/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback } from 'react';
import { StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, VacancyDescription } from '../common';
import { getDays, getDaysLeftString } from '../../services/helpers';
import images from '../../assets/images';
import {
  ButtonsContainer,
  ButtonsFixedContainer,
  Fixed,
  FixedText,
  RocketButton,
  StarButton,
  ButtonText,
  UpButton,
} from './styles';



interface Props {
  vacancy: Vacancy;
}

const UserCard = ({ vacancy }: Props) => {
  const navigation = useNavigation();


  return (
    <Card>
      <VacancyDescription
        onPress={() =>
          navigation.navigate('Responses', {
            vacancy,
          })
        }
        vacancy={vacancy}
      />
      <ButtonsContainer>
        {buttonTitle ? (
          <ButtonsFixedContainer>
            <Fixed>
              
              <FixedText>{buttonTitle}</FixedText>
            </Fixed>
            <FixedText>{buttonText}</FixedText>
          </ButtonsFixedContainer>
        ) : (
          <>
            <RocketButton onPress={() => modalMethod('rocketBig')}>
              <Image source={images.rocket} />
              <ButtonText>Максимум</ButtonText>
            </RocketButton>
            <RocketButton onPress={() => modalMethod('lightingBig')}>
              <Image source={images.lighting} />
              <ButtonText>Закрепить</ButtonText>
            </RocketButton>
            <StarButton onPress={() => modalMethod('starBig')}>
              <Image source={images.star} />
              <ButtonText>Выделить</ButtonText>
            </StarButton>
          </>
        )}
      </ButtonsContainer>
      {days !== 0 && !buttonTitle && (
        <UpButton>
          <Image
            source={images.arrowUp}
            style={{ alignSelf: 'center', marginTop: 3, marginRight: 7 }}
          />
          <ButtonText>Поднять вакансию</ButtonText>
        </UpButton>
      )}
      {modal.on && (
        <ModalScreen
          vacancy={vacancy}
          type={modal.type}
          onRequestClose={modalMethod}
        />
      )}
    </Card>
  );
};

export { VacancyCard };
