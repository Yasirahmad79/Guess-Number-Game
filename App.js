import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);

  

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(guessRounds + 1);
    setGuessRounds(numberOfRounds)
  };
  const startNewGameHandler = ()=>{
    setUserNumber(null);
    setGuessRounds(0)
  }

  let content = <GameStartScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
  }

  return (
    <>
    <StatusBar style='light' />
    <LinearGradient
      colors={[Colors.reddish600, Colors.yellowish]}
      style={styles.background}
    >
      <ImageBackground
        source={require('./assets/images/game-bg.png')}
        resizeMode="cover"
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageOpacity}
      >
        <SafeAreaView style={styles.screen}>
          {content}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundImageOpacity: {
    opacity: 0.15,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

