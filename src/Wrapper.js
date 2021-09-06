import React from 'react';

import {Background, TitleWrapper, Title, Content} from './Wrapper.style';

import TodoInsert from '@components/TodoInsert';
import TodoList from '@components/TodoList';

const Wrapper = () => {
  return (
    <Background>
      <TitleWrapper>
        <Title>Jurr Todo List</Title>
      </TitleWrapper>
      <Content>
        <TodoInsert />
        <TodoList />
      </Content>
    </Background>
  );
};

export default Wrapper;
