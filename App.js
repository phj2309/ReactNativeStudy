import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

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
  const AppContainer = createAppContainer(RootStack);
  return (
    // <SafeAreaView style={styles.backgroundStyle}>
    //   <Text>Hello</Text>
    // </SafeAreaView>
    <AppContainer />
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
