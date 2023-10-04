import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface BigTextProps {
  children: any;
}

const BigText: React.FC<BigTextProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
export default BigText;
