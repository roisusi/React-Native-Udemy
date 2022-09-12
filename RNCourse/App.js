import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal"></Button>
      </View>

      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: { flexDirection: "row", justifyContent: "space-between" },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%", //take 80% of the container
    marginRight: 8,
    padding: 8,
  },
});
