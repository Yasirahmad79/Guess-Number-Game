import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import ConceptualText from "../components/ConceptualText";

const GameStartScreen = ({ onStartGame }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enteredNumber);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber >= 100) {
      Alert.alert("Invalid Number", "It must be a number between 1 to 99!", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onStartGame(chooseNumber);
  };

  return (
    <View>
      <Title>Guess My Number</Title>
      <Card>
        <ConceptualText>Enter a Number</ConceptualText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonAlighnment}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.yellowish,
    borderBottomColor: Colors.yellowish,
    borderBottomWidth: 2,
    marginVertical: 8,
    textAlign: "center",
  },
  buttonAlighnment: {
    flexDirection: "row",
    marginTop: 8,
  },
  btnContainer: {
    flex: 1,
  }
});
