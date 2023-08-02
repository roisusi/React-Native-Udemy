import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen({ userNumber }) {
  const [guess, setGuess] = useState(generateRandomBetween(1, 100, userNumber));

  function handleNextGuess(direction) {
    if (
      (direction === "lower" && guess < userNumber) ||
      (direction === "greater" && guess > userNumber)
    ) {
      Alert.alert("Don't Lie", "This is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    //direction is lower or greater
    if (direction === "lower") {
      maxNumber = guess;
    } else {
      minNumber = guess;
    }
    const newRNDNumber = generateRandomBetween(minNumber, maxNumber, guess);
    setGuess(newRNDNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onButtonClick={handleNextGuess.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onButtonClick={handleNextGuess.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      {/*<View>LOG ROUNDS</View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
