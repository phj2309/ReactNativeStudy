import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const MainPage = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainPage;
