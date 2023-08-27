import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameISOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontsLoaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Light.ttf"),
    "open-sans-bold": require("./assets/fonts/IBMPlexSans-Bold.ttf"),
  });

  SplashScreen.preventAutoHideAsync();

  function handlePickedNumber(number) {
    setUserNumber(number);
    setGameISOver(false);
  }

  function handleGameIsOver(numberOfRounds) {
    setGameISOver(true);
    setGuessRounds(numberOfRounds);
  }

  function handleStartNewGame() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  let screen = <StartGameScreen onPickNumber={handlePickedNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={handleGameIsOver} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onStartNewGame={handleStartNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen} //for the View
        source={require("./assets/images/background.png")}
        resizeMode={"cover"}
        imageStyle={styles.backgroundImage} //for the Image
      >
        <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: { opacity: 0.15 },
});
