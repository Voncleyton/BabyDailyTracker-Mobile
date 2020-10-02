import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #d988ff;
`;

export const Time = styled.View`
  align-items: center;
  flex-direction: row;
`;
export const Hours = styled.Text`
  color: #e5e5e5;
  font-size: 64;
`;
export const Minutes = styled.Text`
  color: #e5e5e5;
  font-size: 64;
`;
export const Seconds = styled.Text`
  color: #e5e5e5;
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
export const StartStopButton = styled.TouchableOpacity`
  height: 30px;
  width: 92px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #7c7c7c;
  margin-top: 20px;
`;
