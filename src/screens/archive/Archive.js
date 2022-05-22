import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function Archive() {
  const answer = useContext(AnswerContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Архив</Text>
      <Text style={styles.text}>answer.name</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1000,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    width: "95%",
    // justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    margin: 5,
    padding: 10,
    color: "green",
    borderWidth: 3,
    borderColor: "green",
  },
});
