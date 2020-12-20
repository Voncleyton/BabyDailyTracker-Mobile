import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FaIcon from 'react-native-vector-icons/FontAwesome5';

import {formatTime} from '../../utils/formatTime';
import useTimer from '../../hooks/useTimer';

import {
  Container,
  TimeContainer,
  Time,
  SleepTime,
  WakeTime,
  ButtonsContainer,
  Button,
} from './styles';

interface TimerProps {
  initialDateTime: Date;
}

const Timer: React.FC<TimerProps> = ({initialDateTime}) => {
  const {
    timer,
    handleStart,
    handlePause,
    handleReset,
    isActive,
    isPaused,
  } = useTimer(0);

  return (
    <Container>
      <SleepTime>Dormiu: 10:00 am</SleepTime>
      <WakeTime>Acordou: 10:00 am</WakeTime>
      <TimeContainer>
        <Time>{formatTime(timer)}</Time>
      </TimeContainer>

      <ButtonsContainer>
        <Button onPress={handleReset}>
          <FaIcon name="undo-alt" size={30} color="#f9f1f1" />
        </Button>
        <Button onPress={handleStart} disabled={isActive}>
          <IonIcon name="play" size={40} color="#f9f1f1" />
        </Button>
        <Button onPress={handlePause} disabled={isPaused}>
          <IonIcon name="pause" size={40} color="#f9f1f1" />
        </Button>
        <Button onPress={() => {}}>
          <EntypoIcon name="check" size={40} color="#f9f1f1" />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Timer;
