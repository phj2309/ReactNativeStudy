import styled from 'styled-components/native';

export const InsertWrapper = styled.View`
  height: 70px;
  margin: 15px;
  padding: 5px;
  justify-content: space-between;
  flex-direction: row;
`;
export const InputBox = styled.TextInput`
  flex: 5;
  color: rgb(19, 19, 19);
  font-size: 15px;
  border-bottom-width: 1px;
  border-color: #6aafe6;
`;

export const AddBtn = styled.View`
  margin-left: 5px;
  flex: 1;
  color: rgba(19, 19, 19, 0.5);
  border-color: #8ec0e4;
  border-width: 2px;
  border-radius: 50px;
  align-items: center;
  padding: 5% 2%;
`;

export const PlusImage = styled.Image`
  width: 25px;
  height: 25px;
  resize-mode: contain;
`;
