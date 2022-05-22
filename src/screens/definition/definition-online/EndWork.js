import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AnswerContext } from "../../../context/Context";

export default function EndWork({ navigation }) {
  const [yesArchive, setYesArchive] = useState(false);

  const answer = useContext(AnswerContext);

  const loadSceneArchive = () => {
    navigation.navigate("Сохраненные ответы");
  };

  const showAlert = [
    {
      text: "Cancel",
    },
    {
      text: "OK",
      onPress: () => console.log("OКНО"),
    },
  ];

  useEffect(() => {
    setTimeout(() => createTwoButtonAlert(), 3000);
  });

  const createTwoButtonAlert = () =>
    Alert.alert("Архив", "Сохранить ответ в архиве?", showAlert);

  //  Вывод результата

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.name}>{answer.name}</Text>

        <Text style={styles.text}>{answer.text}</Text>
        <StatusBar style="auto" />
      </ScrollView>

      <View>
        <TouchableOpacity onPress={loadSceneArchive}>
          <Text style={styles.text}>Сохранить ответ в архиве?</Text>
        </TouchableOpacity>
      </View>
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
  name: {
    fontSize: 20,
    fontFamily: "chinaFont",
    alignItems: "center",
  },
});
