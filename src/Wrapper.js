import React, {useState} from 'react';

import {Background, TitleWrapper, Title, Content} from './Wrapper.style';

import TodoInsert from '@components/TodoInsert';
import TodoList from '@components/TodoList';

const Wrapper = () => {
  const [todoItem, setTodoItem] = useState([]);

  const index = new Date();

  const insertItem = text => {
    setTodoItem([...todoItem, {id: index, textValue: text, checked: false}]);
  };

  return (
    <Background>
      <TitleWrapper>
        <Title>Todo List</Title>
      </TitleWrapper>
      <Content>
        <TodoInsert onInsert={insertItem} />
        <TodoList todoItem={todoItem} />
      </Content>
    </Background>
  );
};

export default Wrapper;
