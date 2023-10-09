import React from 'react';
import StyledButton from '../components/StyledButton';
import BigText from '../components/BigText';
import GameButtons from '../components/GameButtons';
import useTimer from '../components/Timer';
import {Text} from 'react-native';
import {generateFakeWords} from '../services/WordService';

const GameContainer = () => {
  const [words, setWords] = React.useState(generateFakeWords(20));
  const [gameRunning, setGameRunning] = React.useState(false);
  const {timerComponent, startTimer} = useTimer(60);

  const startGame = () => {
    startTimer();
    setGameRunning(true);
  };
  const [currentWord, setCurrentWord] = React.useState<string>('null');
  const [correctWords, setCorrectWords] = React.useState<string[]>([]);
  const [incorrectWords, setIncorrectWords] = React.useState<string[]>([]);

  const nextWord = React.useCallback(() => {
    console.log(123);
    setCurrentWord(words.slice(-1)[0] || 'test');
    setWords(words.slice(0, -1));
  }, [words]);

  const handleCorrect = React.useCallback(() => {
    nextWord();
    setCorrectWords(x => [...x, currentWord]);
  }, [currentWord, nextWord]);

  const handleIncorrect = React.useCallback(() => {
    nextWord();
    setIncorrectWords(x => [...x, currentWord]);
  }, [currentWord, nextWord]);

  return (
    <>
      <StyledButton onPress={startGame} text="start game" />
      <BigText>{gameRunning ? currentWord : '...'}</BigText>
      {timerComponent}
      <Text>{words}</Text>
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
