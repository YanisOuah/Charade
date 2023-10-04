import React from 'react';
import StyledButton from '../components/StyledButton';
import BigText from '../components/BigText';
import GameButtons from '../components/GameButtons';
import useTimer from '../components/Timer';
import {Text} from 'react-native';

const GameContainer = () => {
  const [gameRunning, setGameRunning] = React.useState(false);
  const {timerComponent, startTimer} = useTimer(60);

  const startGame = () => {
    startTimer();
    setGameRunning(true);
  };
  const [currentWord, setCurrentWord] = React.useState<string>('null');
  const [correctWords, setCorrectWords] = React.useState<string[]>([]);
  const [incorrectWords, setIncorrectWords] = React.useState<string[]>([]);

  const nextWord = () => {
    console.log(123);
    setCurrentWord('test');
  };
  const handleCorrect = React.useCallback(() => {
    nextWord();
    setCorrectWords(x => [...x, currentWord]);
  }, [currentWord]);

  const handleIncorrect = React.useCallback(() => {
    nextWord();
    setIncorrectWords(x => [...x, currentWord]);
  }, [currentWord]);

  return (
    <>
      <StyledButton onPress={startGame} text="start game" />
      <BigText>{gameRunning ? 'test' : '...'}</BigText>
      {timerComponent}
      <Text>{correctWords}</Text>
      <Text>{incorrectWords}</Text>
      <GameButtons
        disabled={!gameRunning}
        onCorrect={handleCorrect}
        onIncorrect={handleIncorrect}
      />
    </>
  );
};

export default GameContainer;
