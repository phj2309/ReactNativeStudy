import React, {useState} from 'react';

import {TouchableOpacity, Text} from 'react-native';

import {
  Background,
  Content,
  ItemTxt,
  PlusImage,
  DeleteImage,
} from './TodoItem.style';

const TodoItem = ({textValue, id, onDelete}) => {
  const [check, setCheck] = useState(false);

  const checkToggle = () => {
    setCheck(!check);
  };

  return (
    <Background>
      <TouchableOpacity onPress={() => checkToggle()}>
        {check ? (
          <PlusImage source={require('@assets/images/check-mark.png')} />
        ) : (
          <PlusImage source={require('@assets/images/dry-clean.png')} />
        )}
      </TouchableOpacity>
      <Content>
        <ItemTxt textLine={check}>{textValue}</ItemTxt>
      </Content>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <DeleteImage source={require('@assets/images/attachDeleteIcon.png')} />
      </TouchableOpacity>
    </Background>
  );
};

export default TodoItem;
