import React from 'react';
import Timer from '../../components/Timer';
import {Container, Content} from './styles';

const sleep: React.FC = () => {
  return (
    <Container>
      <Timer />
      <Content />
    </Container>
  );
};

export default sleep;
