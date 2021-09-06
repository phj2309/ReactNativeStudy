import styled from 'styled-components/native';

export const Background = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: rgb(19, 19, 19);
  font-size: 36px;
  text-align: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 90%;
  flex: 6;
  color: rgb(19, 19, 19);
  text-align: center;
  font-size: 36px;
  background-color: #8fbc8f;
  border-radius: 50px;
`;

export const InputBox = styled.TextInput`
  color: rgb(19, 19, 19);
  font-size: 15px;
  margin: 15px;
  padding: 5px;
  border-bottom-width: 1px;
  border-color: #2e8b57;
`;

export const ItemWrapper = styled.ScrollView`
  width: 90%;
  flex: 6;
  color: rgb(19, 19, 19);
  text-align: center;
  font-size: 36px;
  background-color: #8fbc8f;
  border-radius: 50px;
`;
