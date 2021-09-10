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

const TodoList = ({todoItem}) => {
  return (
    <Background>
      {todoItem.map(todoItem => (
        <TodoItem key={todoItem.id} {...todoItem} />
      ))}
      {/* <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem /> */}
    </Background>
  );
};

export default TodoList;
