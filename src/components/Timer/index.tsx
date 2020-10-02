import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import {
  Container,
  Time,
  Hours,
  Minutes,
  Seconds,
  SleepTime,
  WakeTime,
  StartStopButton,
} from './styles';

const Timer: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerIsActive, setTimerIsActive] = useState(false);

  const formatNumber = (number: Number) => `0${number}`.slice(-2);

  const handleStartStopTimer = () => {
    setTimerIsActive(!timerIsActive);

    if (timerIsActive) {
      const interval = setInterval(() => {
        if (seconds < 60) {
          setSeconds(seconds => seconds + 1);
        } else if (minutes < 60) {
          setSeconds(0);
          setMinutes(minutes => minutes + 1);
        } else {
          setSeconds(0);
          setMinutes(0);
          setHours(hours => hours + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
  };

  useEffect(() => {
    return;
    /**const interval = setInterval(() => {
      if (seconds < 60) {
        setSeconds(seconds => seconds + 1);
      } else if (minutes < 60) {
        setSeconds(0);
        setMinutes(minutes => minutes + 1);
      } else {
        setSeconds(0);
        setMinutes(0);
        setHours(hours => hours + 1);
      }
    }, 1000);
    return () => clearInterval(interval);*/
  }, []);

  return (
    <Container>
      <Time>
        <Hours>{`${formatNumber(hours)}:`}</Hours>
        <Minutes>{`${formatNumber(minutes)}:`}</Minutes>
        <Seconds>{`${formatNumber(seconds)}`}</Seconds>
      </Time>
      <SleepTime>Dormiu: 10:00 am</SleepTime>
      <WakeTime>Acordou: 10:00 am</WakeTime>

      <StartStopButton>
        <Text>Começar</Text>
      </StartStopButton>
    </Container>
  );
};

export default Timer;
