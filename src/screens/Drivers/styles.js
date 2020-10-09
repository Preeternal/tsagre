import styled from 'styled-components/native';
import {Button} from '../../components/common';

export const ButtonText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19.69px;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
`;

export const FooterButton = styled(Button)`
  height: 50px;
  align-self: center;
  width: 95%;
  box-shadow: 0px 2px 5px gray;
  elevation: 2;
  position: absolute;
  bottom: 20px;
`;
