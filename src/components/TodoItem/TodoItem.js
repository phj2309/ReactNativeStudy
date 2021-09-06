import React from 'react';

import {
  Background,
  TitleWrapper,
  Title,
  Content,
  InputBox,
  ItemWrapper,
} from './TodoItem.style';

const TodoItem = () => {
  return (
    <Background>
      <Content>
        <ItemWrapper></ItemWrapper>
      </Content>
    </Background>
  );
};

export default TodoItem;
