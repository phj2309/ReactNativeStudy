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

const TodoList = ({todoItem, onDelete}) => {
  return (
    <Background>
      {todoItem.map(todoItem => (
        <TodoItem key={todoItem.id} {...todoItem} onDelete={onDelete} />
      ))}
    </Background>
  );
};

export default TodoList;
