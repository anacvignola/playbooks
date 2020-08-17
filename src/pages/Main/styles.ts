import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.Text`
  color: #2a3b5c;
  font-family: 'Roboto-Bold';
  font-size: 24px;
`;

export const UserButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
`;

export const List = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardInformations = styled.View`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 0;
`;

export const CardTitle = styled.Text`
  color: #2a3b5c;
  font-family: 'Roboto-Bold';
  font-size: 15px;
`;

export const CardTagline = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 13px;
  color: #828796;
`;

export const CardAuthor = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 13px;
  color: #828796;
`;

export const CardResume = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #828796;
`;
