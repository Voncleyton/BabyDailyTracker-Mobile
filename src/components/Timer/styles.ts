import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #003569;
`;

export const TimeContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Time = styled.Text`
  color: #f9f1f1;
  font-size: 64;
`;

export const SleepTime = styled.Text`
  color: #d3d3d3;
  font-size: 16;
`;

export const WakeTime = styled.Text`
  color: #d3d3d3;
  font-size: 16;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 20px;
`;
