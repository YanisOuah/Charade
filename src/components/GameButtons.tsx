import React from 'react';
import {StyleSheet, View} from 'react-native';
import StyledButton from './StyledButton';

interface GameButtonsProps {
  disabled: boolean;
  onCorrect: () => void;
  onIncorrect: () => void;
}

const GameButtons: React.FC<GameButtonsProps> = ({
  disabled,
  onCorrect,
  onIncorrect,
}) => {
  return (
    <View style={styles.bottom}>
      <StyledButton
        onPress={onCorrect}
        text="Correct"
        color="green"
        disabled={disabled}
      />
      <StyledButton
        onPress={onIncorrect}
        text="Incorrect"
        color="red"
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottom: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
export default GameButtons;
