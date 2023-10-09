import React from 'react';
import {StyleSheet, View} from 'react-native';
import GameContainer from '../containers/GameContainer';

const GameScreen = () => {
  return (
    <View style={styles.main}>
      <GameContainer />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {height: '100%'},
});
export default GameScreen;
