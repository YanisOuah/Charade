import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

interface StyledButtonProps {
  text?: string;
  children?: React.ReactNode;
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue', // Customize the button background color
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    color: 'white', // Customize the text color
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
const StyledButton: React.FC<StyledButtonProps> = ({
  text,
  children,
  onPress,
}) => {
  return (
    // <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
    //   <Text style={[styles.text, textStyle]}>{text}</Text>
    // </TouchableOpacity>
    <View style={styles.buttonOuterLayout}>
      {/* <View style={styles.buttonLayout}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {!!text && <Text style={styles.text}>{text}</Text>}
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;
