import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MainStack from "./src/navigate/Navigate";

const fonts = () =>
  Font.loadAsync({
    chinaFont: require("./assets/fonts/ReggaeOne.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <View style={styles.container}>
        <MainStack />
        <StatusBar />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <AppLoading
          startAsync={fonts}
          onFinish={() => setFont(true)}
          onError={() => {
            console.warn;
          }}
        />
        <StatusBar />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#fafafa",
    alignContent: "center",
  },
});
