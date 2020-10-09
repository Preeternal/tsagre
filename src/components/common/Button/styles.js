import styled from 'styled-components/native';

type Props = {
  type?: 'blue' | 'disabled' | 'bordered',
};

export const Button =
  styled.TouchableOpacity <
  Props >
  `
  align-items: center;
  justify-content: center;
  background-color: ${({type}) =>
    (type === 'disabled' && '	#f0f0f0') ||
    (type === 'blue' && 'blue') ||
    'transparent'};
  border-radius: ${({type}) => (type ? '10px' : 0)};
  border: ${({type}) => (type === 'bordered' ? '1px' : 0)} solid
    gray;
`;
