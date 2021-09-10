import React, {useState} from 'react';

import {TouchableOpacity, Text} from 'react-native';

import {
  Background,
  Content,
  ItemTxt,
  PlusImage,
  DeleteImage,
} from './TodoItem.style';

const TodoItem = () => {
  const [check, setCheck] = useState(false);

  const onDelete = () => {};

  return (
    <Background>
      <TouchableOpacity onPress={() => setCheck(!check)}>
        {check ? (
          <PlusImage source={require('@assets/images/dry-clean.png')} />
        ) : (
          <PlusImage source={require('@assets/images/check-mark.png')} />
        )}
      </TouchableOpacity>
      <Content>
        <ItemTxt></ItemTxt>
      </Content>
      <TouchableOpacity onPress={() => onDelete()}>
        <DeleteImage source={require('@assets/images/attachDeleteIcon.png')} />
      </TouchableOpacity>
    </Background>
  );
};

export default TodoItem;
