import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gStyle } from "../../styles/styles";

export default function Header() {
  return (
    <View>
      <Text style={gStyle.title}>TEXT</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 20,
    color: "red",
    fontFamily: "chinaFont",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
