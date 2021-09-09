import React, {useState} from 'react';

import {TouchableOpacity} from 'react-native';

import {
  Background,
  TitleWrapper,
  Title,
  Content,
  InputBox,
  ItemWrapper,
  PlusImage,
} from './TodoItem.style';

const TodoItem = () => {
  const [check, setCheck] = useState(false);

  return (
    <Background>
      <TouchableOpacity onPress={() => setCheck(!check)}>
        <PlusImage source={require('@assets/images/attachAddIcon.png')} />
      </TouchableOpacity>
      <Content></Content>
    </Background>
  );
};

export default TodoItem;
