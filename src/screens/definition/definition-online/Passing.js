import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Passing(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.loadScene}>
        <Text style={styles.text}>{props.nameStr}r</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    padding: 10,
    color: "red",
    fontFamily: "chinaFont",
    textAlign: "center",
    width: "100%",
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "#D3D3D3",
  },
});
