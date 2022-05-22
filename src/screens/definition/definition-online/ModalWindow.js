import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { gStyle } from "../../../styles/styles";

export default function ModalWindow() {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Как гадать</Text>
      <View>
        <Text>
          Перед вами 3 монетки. {"\n"}Поочередно нажмите на монетки. Каждая
          монетка покажет случайную сторону "ОРЁЛ" или "РЕШКА" {"\n"}+ После
          этого изменить сторону монетки невозможно, так как вы определили ИНЬ
          или ЯНЬ в движении вашей жизни Теперь нажмите кнопку "СЛЕДУЮЩАЯ
          ПОПЫТКА". Чтобы определить напрвление и возможности скорректировать
          ваше сегодняшнее положение в мире нужно провести этот процесс с
          монетками 6 раз, то есть сделать 6 попыток. После этого нажмите кнопку
          "Показать ответ из Книги перемен".
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 20, color: "black" },
  container: {
    flex: 1,
  },
});
