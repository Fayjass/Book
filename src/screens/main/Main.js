import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import Header from "../main/Header";
import Quote from "../main/Quote";

// Титульная страница

export default function Main({ navigation }) {
  const loadSceneBook = () => {
    navigation.navigate("text1");
  };

  const loadSceneDefinition = () => {
    navigation.navigate("text2");
  };

  return (
    <View style={styles.container}>
      <Header />

      <Quote />

      <TouchableOpacity onPress={loadSceneBook}>
        <Text style={styles.text}>text1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={loadSceneDefinition}>
        <Text style={styles.text}>text2</Text>
        <Image
          source={require("../../images/chinaCoins.jpg")}
          style={styles.img}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 0,
    marginTop: 0,

    backgroundColor: "#fafafa",
    alignContent: "center",
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    color: "red",
    fontFamily: "chinaFont",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "#D3D3D3",
    alignItems: "center",
  },

  img: { width: "100%", height: 160 },
});
