import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleNumberInput(enteredText) {
    setEnteredNumber(enteredText);
  }

  function handleResetButton() {
    setEnteredNumber("");
  }

  function handleConfirmedButton() {
    if (
      isNaN(Number(enteredNumber)) ||
      Number(enteredNumber) > 100 ||
      Number(enteredNumber) <= 0
    ) {
      Alert.alert("Invalid Number", "Please enter a number between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: handleResetButton,
        },
      ]);
    } else {
      onPickNumber(enteredNumber);
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType={"number-pad"}
        autoCapitalize={"none"}
        value={enteredNumber}
        onChangeText={handleNumberInput}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onButtonClick={handleResetButton}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onButtonClick={handleConfirmedButton}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800, //will trigger a warning type ABI48_0_0RCTView has a shadow...
    borderRadius: 8,
    elevation: 4, //Shadow on android devices
    //Shadow on ios devices
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    //Shadow on ios devices
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
