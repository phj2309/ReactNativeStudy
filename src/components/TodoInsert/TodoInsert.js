import React from 'react';

import {TouchableOpacity} from 'react-native';

import {InsertWrapper, InputBox, AddBtn, PlusImage} from './TodoInsert.style';

const TodoInsert = () => {
  const addItem = () => {};
  return (
    <InsertWrapper>
      <InputBox placeholder="Add an item" />
      <AddBtn>
        <TouchableOpacity onPress={() => addItem()}>
          <PlusImage source={require('@assets/images/attachAddIcon.png')} />
        </TouchableOpacity>
      </AddBtn>
    </InsertWrapper>
  );
};

export default TodoInsert;
