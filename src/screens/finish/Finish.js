import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Book from "../definition/definition-online/Book";
import { AnswersContext } from "../../context/Context";

export default function Finish({ route }) {
  const answers = route.params;

  const answer = answers.answers.join("");

  return (
    <View style={styles.container}>
      <Book answer={answer} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    width: "95%",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,

    color: "red",
  },
});
