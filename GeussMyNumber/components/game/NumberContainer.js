import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: width < 380 ? 12 : 24,
    margin: width < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: width < 380 ? 28 : 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
