import React from 'react';

import {
  Background,
  TitleWrapper,
  Title,
  Content,
  InputBox,
  ItemWrapper,
} from './TodoList.style';

import TodoItem from '@components/TodoItem';

const TodoList = () => {
  return (
    <Background>
      <Content>
        <TodoItem />
      </Content>
    </Background>
  );
};

export default TodoList;