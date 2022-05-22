import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button, FlatList, Text } from "react-native";
// import Graf from "../../../assets/grafik/Graf";
import Coin from "./Coin";

export default function Coins(props) {
  // Бросаем 3 монетки подряд
  const cards = new Array(3).fill().map((_, i) => i);

  return (
    <View>
      <Text>text</Text>

      <FlatList
        data={cards}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Coin
              card={item}
              result6={props.result6}
              toggleCoinsHandler={props.toggleCoinsHandler}
              coins={props.coins}
            />
          </View>
        )}
      />
      <Button
        title="Следующая попытка"
        style={{ marginTop: 50 }}
        onPress={props.clearHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#D3D3D3",
    // alignItems: "center",
    width: "100%",
    // justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    marginTop: 20,
    // marginBottom: 10,
    color: "black",
    borderWidth: 3,
    padding: 10,
    borderColor: "green",
    backgroundColor: "white",
    textAlign: "center",
  },
});
