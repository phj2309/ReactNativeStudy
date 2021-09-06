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
  border-color: #2e8b57;
`;

export const AddBtn = styled.View`
  margin-left: 5px;
  flex: 1;
  color: rgb(19, 19, 19);
  background-color: #6b8e23;
  border-radius: 10px;
  align-items: center;
  padding: 5% 2%;
`;

export const PlusImage = styled.Image`
  width: 30px;
  height: 30px;
  resize-mode: contain;
`;
