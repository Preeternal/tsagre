import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding-top: 32px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 32px;
`;

export const Description = styled.View`
  padding-left: 10px;
  flex: 1;
`;

export const DriverId = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: black;
  margin-bottom: 2px;
`;

export const DriverName = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: black;
  margin-bottom: 3px;
`;

export const DriverNationality = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: gray;
`;

export const Statistics = styled.View`
  align-items: flex-end;
`;

export const WikiContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WikiWrapper = styled.TouchableOpacity`
  width: 42.76px;
  height: 25px;
  background: blue;
  border-radius: 50px;
  justify-content: center;
`;

export const Wiki = styled.Text`
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20.7px
  /* or 21px */
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
`;

export const ViewsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Birth = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 14.06px;
  display: flex;
  align-items: center;
  text-align: right;
  color: gray;
`;
