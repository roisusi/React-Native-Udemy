import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TextInput, Text, View, Button, Alert } from "react-native";

export default function App() {
  const [goals, setGoals] = useState("No goals entered");
  const onGoalType = (event) => {
    setGoals(event);
  };

  const onGoalPress = () => {
    if (goals) {
      Alert.alert(goals);
    } else {
      Alert.alert("No goals entered");
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals !"
          onChangeText={onGoalType}
        />
        <Button title="Add Goal" onPress={onGoalPress}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%", //take 70% of the container
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: { flex: 5 },
});
