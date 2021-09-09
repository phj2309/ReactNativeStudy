import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import MainPage from '@pages/MainPage';

const App = () => {
  const RootStack = createStackNavigator(
    {
      Main: {
        screen: MainPage,
      },
    },
    {
      initialRouteName: 'Main',
    },
  );
  //const AppContainer = createAppContainer(RootStack);
  return <></>;
};

export default App;
