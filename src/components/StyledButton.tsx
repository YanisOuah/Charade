import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

interface StyledButtonProps {
  text?: string;
  disabled?: boolean;
  color?: 'red' | 'green' | 'blue';
  children?: React.ReactNode;
  onPress: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  text,
  disabled = false,
  color = 'blue',
  children,
  onPress,
}) => {
  const buttonStyle = React.useMemo(
    () => ({...styles.button, backgroundColor: disabled ? 'grey' : color}),
    [disabled, color],
  );
  return (
    <View style={styles.buttonOuterLayout}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={onPress}
        disabled={disabled}>
        {!!text && <Text style={styles.text}>{text}</Text>}
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonOuterLayout: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLayout: {
    marginBottom: 10,
  },
});
export default StyledButton;
