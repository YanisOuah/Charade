import React from 'react';
import {View} from 'react-native';
import HomeContainer from '../containers/HomeContainer';

interface HomeScreenProps {
  navigation: any;
}
const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <HomeContainer {...props} />
    </View>
  );
};
export default HomeScreen;
