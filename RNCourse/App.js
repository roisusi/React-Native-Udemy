import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (eventText) => {
    setEnteredGoalText(eventText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals !"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView bounces={false}>
          {courseGoals.map((goals) => (
            // This is for iPhone that not supports radios on Text
            <View key={Math.random(1)} style={styles.goalItem}>
              <Text style={styles.goalTextItem}>{goals}</Text>
            </View>
          ))}
        </ScrollView>
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
  goalItem: {
    margin: 8,
    padding: 6,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalTextItem: {
    color: "white",
  },
});
