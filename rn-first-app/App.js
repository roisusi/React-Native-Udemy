import React, { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Talk2ME Login");
  const [numberOfClicked, setNumberOfClicked] = useState(1);
  const [userNameInput, setUserNameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const changeTitle = () => {
    setNumberOfClicked(numberOfClicked + 1);
    setOutputText(`You clicked me ${numberOfClicked}`);
  };
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlNTJiOGQ4NTk4N2U1OWRjYWM2MmJlNzg2YzcwZTAyMDcxN2I0MTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXhwZW5zZWFwcGhpdCIsImF1ZCI6ImV4cGVuc2VhcHBoaXQiLCJhdXRoX3RpbWUiOjE2MzE4OTkyNDcsInVzZXJfaWQiOiJkUERockhnVmhvWU1LUjZzY2NUejFKd0o3a20xIiwic3ViIjoiZFBEaHJIZ1Zob1lNS1I2c2NjVHoxSndKN2ttMSIsImlhdCI6MTYzMjAwNjg3NiwiZXhwIjoxNjMyMDEwNDc2LCJlbWFpbCI6InNoYXlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInNoYXlAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.KPq1OOnUvV9doi0O2KsLioTn7tc0ddxhDGFlMaYBluT8ZcChEcgipe1g7o4wPOjagINewO-cFLu1EVJdGJ8wMawaTLV4nUZDNh3Wh-_t-AMx_nx0QnsYcHvAZBBcuNUV57DFEGie7kaAQG7cnqYYxVxug2h7GFgz1YRYrzhZuPdigNwUhtiRLfoTCoxEuAM_1-affJ7LU3w_dTObnJuRssa4sXFz0atHHE0eGGOZvoooezJGlzuHkiBmpnLtw77bUq3R9eBQA2nY8GdVObOeI7qjdfSigamS1K096yAhed9I2-Hj788CEdyTAtvX1sJ-X7W_JcNZi9aNzPFC3WacHA"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const login = async () => {
    const data = await fetch("http://localhost:3002/api/admin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));
  };
  const onChangeText = () => {};
  const onChangeNumber = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.loging}>{outputText}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={userNameInput}
        placeholder="User Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={passwordInput}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={login}></Button>
      <Text
        style={styles.loging}
        dataDetectorType={"link"}
        onPress={() => Linking.openURL("https://google.com")}
      >
        Register
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  login: {
    fontSize: 18,
  },
});
