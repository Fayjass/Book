import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EndWork from "./EndWork";
import { gStyle } from "../../../styles/styles";
import { AntDesign } from "@expo/vector-icons";
import ModalWindow from "./ModalWindow";
import { AnswerContext } from "../../../context/Context";

export default function Book(props) {
  const answerName = [];

  const answerText = [];

  const questions = [];

  const answerItem = questions.filter((item) => props.answer === item.graph);

  const index = answerItem[0].number - 1;

  const answer = {
    question: index,
    name: answerName[index],
    text: answerText[index],
  };

  return (
    <View style={gStyle.main}>
      <AnswerContext.Provider value={answer}>
        <EndWork />
      </AnswerContext.Provider>
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
});
