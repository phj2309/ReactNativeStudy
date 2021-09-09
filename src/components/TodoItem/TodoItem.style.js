import styled from 'styled-components/native';

export const Background = styled.View`
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* border-bottom-width: 1px;
  border-color: #a593e0; */
  margin: 5px 20px;
  padding: 0 10px;
  background-color: #b3cde3;
  border-radius: 20px;
`;

export const TitleWrapper = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
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

export const PlusImage = styled.Image`
  width: 25px;
  height: 25px;
  resize-mode: contain;
`;

export const Content = styled.View`
  flex: 4;
  padding-left: 10px;
  border-radius: 50px;
`;

export const ItemTxt = styled.Text`
  color: #646464;
  font-size: 20px;
`;

export const DeleteImage = styled.Image`
  width: 30px;
  height: 30px;
  resize-mode: contain;
`;
