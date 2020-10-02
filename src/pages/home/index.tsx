import React from 'react';
import {Text} from 'react-native';
import avatar from '../../assets/Anthony.jpeg';

import Card from '../../components/Card';

import {
  Container,
  BabyInfo,
  AvatarContainer,
  Image,
  MoreInfoContainer,
  Content,
  CardContent,
  Name,
  Age,
  Height,
  Weight,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <BabyInfo>
        <AvatarContainer>
          <Image source={avatar} />
          <Name>Anthony</Name>
          <Age>8 Meses e 7 Dias</Age>
        </AvatarContainer>

        <MoreInfoContainer>
          <Height>95cm</Height>
          <Weight>8.3Kg</Weight>
        </MoreInfoContainer>
      </BabyInfo>

      <Content>
        <Card />
      </Content>
    </Container>
  );
};

export default Home;
