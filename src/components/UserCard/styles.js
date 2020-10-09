import styled from 'styled-components/native';
import {Button} from '../common';

export const ButtonsContainer = styled.View`
  border-top-width: 0.5px;
  border-color: gray;
  flex-direction: row;
`;

export const ButtonsFixedContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 17.27px;
  margin-bottom: 13.87px;
  margin-left: 15.21px;
  margin-right: 15.21px;
  flex-direction: row;
`;

export const Fixed = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FixedText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  color: gray;
`;

export const StarButton = styled(Button)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 17.27px;
  padding-bottom: 13.87px;
`;

export const RocketButton = styled(StarButton)`
  border-right-width: 0.5px;
  border-color: gray;
`;

export const ButtonText = styled.Text`
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16.88px;
  text-align: center;
  color: gray;
  margin-top: 6px;
`;

export const UpButton = styled(Button)`
  flex-direction: row;
  padding-bottom: 27.97px;
  padding-top: 27.97px;
  border-top-width: 0.5px;
  border-color: gray;
`;
