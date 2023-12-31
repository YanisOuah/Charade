import React from 'react';
import StyledButton from '../components/StyledButton';

interface HomeContainerProps {
  navigation: any;
}

const HomeContainer: React.FC<HomeContainerProps> = ({navigation}) => {
  return (
    <>
      <StyledButton
        onPress={() => navigation.navigate('Game')}
        color="green"
        text="Play"
      />
    </>
  );
};
export default HomeContainer;
