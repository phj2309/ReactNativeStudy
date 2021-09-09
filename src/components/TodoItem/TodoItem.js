import React, {useState} from 'react';

import {TouchableOpacity, Text} from 'react-native';

import {
  Background,
  TitleWrapper,
  Title,
  Content,
  InputBox,
  ItemWrapper,
  PlusImage,
  DeleteImage,
} from './TodoItem.style';

const TodoItem = () => {
  const [check, setCheck] = useState(false);

  return (
    <Background>
      <TouchableOpacity onPress={() => setCheck(!check)}>
        <PlusImage source={require('@assets/images/attachAddIcon.png')} />
      </TouchableOpacity>
      <Content></Content>
      <TouchableOpacity onPress={() => setCheck(!check)}>
        <DeleteImage source={require('@assets/images/attachDeleteIcon.png')} />
      </TouchableOpacity>
    </Background>
  );
};

export default TodoItem;
