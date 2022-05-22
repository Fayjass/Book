import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Quote() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        «Если бы мне удалось продлить жизнь, то я отдал бы пятьдесят лет на
        изучение Перемен, и тогда бы смог не совершать ошибок» (Беседы и
        суждения 7,16).
      </Text>
      <Text style={styles.nameQuote}>Конфуций</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginTop: 10,
    // marginHorizontal: 10,
    width: "100%",
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "#D3D3D3",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    margin: 0,
    color: "black",
    padding: 15,
    alignItems: "center",
  },
  nameQuote: {
    fontSize: 20,
    color: "red",
    paddingBottom: 20,
    fontFamily: "chinaFont",
    alignItems: "center",
  },
});
