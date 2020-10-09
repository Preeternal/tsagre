import styled from 'styled-components/native';

export const HeaderCenter = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: black;
`;

export const Left = styled.TouchableOpacity`
  flex-direction: row;
`;

export const HeaderLeftText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-align-vertical: center;
  margin-left: 6.78px;
  color: black;
`;

export const Right = styled.TouchableOpacity`
  border: 1px solid blue;
  border-radius: 5px;
`;

export const HeaderRightText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: blue;
  margin: 2px;
`;
