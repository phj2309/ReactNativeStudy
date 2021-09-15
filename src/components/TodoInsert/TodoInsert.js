import React, {useState} from 'react';

import {TouchableOpacity} from 'react-native';

import {InsertWrapper, InputBox, AddBtn, PlusImage} from './TodoInsert.style';

const TodoInsert = ({onInsert}) => {
  const [item, setItem] = useState('');

  const onChangeText = text => {
    setItem(text);
    // if(text === enter) {
    //   addItem()
    // }
  };

  const addItem = () => {
    onInsert(item);
    setItem('');
  };

  return (
    <InsertWrapper>
      <InputBox
        placeholder="Add an item"
        value={item}
        onChangeText={onChangeText}
        multiline={false}
        maxLength={15}
      />
      <AddBtn>
        <TouchableOpacity onPress={() => addItem()}>
          <PlusImage source={require('@assets/images/attachAddIcon.png')} />
        </TouchableOpacity>
      </AddBtn>
    </InsertWrapper>
  );
};

export default TodoInsert;
