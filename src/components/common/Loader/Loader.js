import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container, Spinner} from './styles';

export const Loader = () => {
  return (
    <Container>
      <Spinner>
        <ActivityIndicator size={36} color="white" />
      </Spinner>
    </Container>
  );
};
