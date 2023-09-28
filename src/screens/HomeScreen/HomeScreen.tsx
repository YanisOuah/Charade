import React from 'react';
import {Button, Text, View} from 'react-native';

interface HomeScreenProps {
  navigation: any;
}
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Main Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
export default HomeScreen;
