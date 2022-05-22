import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { gStyle } from "../../../styles/styles";

export default function Coin(props) {
  const name = props.coins[props.card].title;

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          props.toggleCoinsHandler(props.card + 1, props.card, props.result6)
        }
      >
        <Image
          style={{ width: 70, height: 70 }}
          source={require("../../../images/coinchina.jpg")}
        />
        <View style={styles.answer}>
          <Text style={gStyle.title}>{props.coins[props.card].title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    marginTop: 0,
    marginBottom: 0,
    alignItems: "center",
    justifyContent: "space-around",
  },
  answer: {
    height: 50,
    width: "50%",
    marginBottom: 0,
    borderWidth: 3,
    borderColor: "green",
    alignItems: "center",
  },
  text: {
    flex: 1,
    color: "black",
    fontSize: 20,
    fontFamily: "chinaFont",
    alignItems: "center",
  },
});
