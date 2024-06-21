import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import ConceptualText from "../components/ConceptualText";
import Ionicons from "@expo/vector-icons/Ionicons";
import UserLogItem from "../components/UserLogItem";

const generateRandomBetween = (min, max, exclude) => {
  let rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  while (rndNum === exclude) {
    rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return rndNum;
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(100);
  const [guessRounds, setGuessRounds] = useState([currentGuess]);

  const guessItemLength = guessRounds.length;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guessItemLength);
    }
  }, [currentGuess, userChoice, onGameOver]);

  useEffect(() => {
    setMinBoundary(1);
    setMaxBoundary(100);
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      // If user indicates the number is lower, adjust the max boundary
      setMaxBoundary(currentGuess - 1);
    } else if (direction === "greater") {
      // If user indicates the number is greater, adjust the min boundary
      setMinBoundary(currentGuess + 1);
    }

    const nextNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setGuessRounds((previousGuessRounds) => [
      nextNumber,
      ...previousGuessRounds,
    ]);
  };


  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <ConceptualText>Is the number higher or lower?</ConceptualText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <UserLogItem roundNumber={guessItemLength - itemData.index} guess={itemData.item} />}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around",
    width: "80%",
    maxWidth: 300,
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
});

export default GameScreen;
