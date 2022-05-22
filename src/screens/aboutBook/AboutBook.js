import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import Header from "../aboutBook/AboutBook";

export default function AboutBook() {
  return (
    <View>
      <Header />

      <Image
        source={require("../../images/ChinaSilk.jpg")}
        style={{ width: "100%", height: 120 }}
      />

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>
            В И Цзин отражена концепция Дао как «пути человека» и Великого
            предела как «высшего бытия» в единении сил Инь и Ян. Триграмма
            состоит из трех черт, которых всего существует два вида — цельные и
            прерванные посредине. Первые относятся к энергии Ян и символизируют
            активность, свет, а вторые — Инь — пассивность, тьму. Их гармоничное
            объединение в гексаграмме означает успешное развитие жизненной
            ситуации и правильность пути, на который ступил человек. Инь и Ян —
            это все противоположности мира: тепло и холод, верх и низ, интеллект
            и чувство, право и лево и т.д., поэтому при помощи всевозможных их
            комбинаций можно описать весь мир. Таким образом, мир полностью
            описывается исчерпывающими комбинациями триграмм — 64 гексаграммами
            И Цзин.
          </Text>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 2000,
    width: "80%",
    width: "100%",
  },
  text: {
    fontSize: 14,
    color: "black",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "green",
    margin: 10,
    padding: 5,
    paddingHorizontal: 10,
  },
});
