import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { gStyle } from "../../../styles/styles";
import { AntDesign } from "@expo/vector-icons";

import Coins from "./Coins";
import ModalWindow from "./ModalWindow";
import { AnswersContext } from "../../../context/Context";
import Passing from "./Passing";

export default function Definition({ navigation }) {
  const [result6, setResult6] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [count3, setCount3] = useState(0);
  const [isModalWindow, setIsModalWindow] = useState(false);

  const loadSceneResult = () => {
    navigation.navigate("Ответ из Книги Перемен", { answers });
  };

  // 3 бросаемые монетки, completed - false -монетка не брошена

  const img = require("../../../images/chinaCoins.jpg");
  const [coins, setCoins] = useState([
    { id: 1, title: "1", completed: false, img: "img" },
    { id: 2, title: "2", completed: false, img: "img" },
    { id: 3, title: "3", completed: false, img: "img" },
  ]);

  // Шесть попыток бросков 3-х монеток
  const tries = new Array(6).fill().map((_, i) => i);

  // Выполняется при нажатии кнопки "монетка"
  // Кнопке дается статус "ОРЕЛ" или "РЕШКА"
  // Меняется состояние  completed - получила статус

  function toggleCoinsHandler(id, card, tri) {
    setCoins(
      coins.map((button, index) => {
        if (button.id === id) {
          if (button.completed === false) {
            if (Math.random() < 0.5) {
              button = {
                id: id,
                completed: true,
                title: "ОРЕЛ",
              };
              // Считаем число брошенных монеток в одной попытке
              setCount3((count3) => count3 + 1);
            } else {
              button = {
                id: id,
                completed: true,
                title: "РЕШКА",
              };
            }
          }
        }
        return button;
      })
    );
  }

  function clearHandler() {
    // Возврат состояния монеток к первичному состоянию
    if (count3 >= 2) {
      setAnswers((answers) => answers.concat("1"));
    } else {
      setAnswers((answers) => answers.concat("0"));
    }
    setCount3(0);
    setResult6(() => result6 + 1);

    setCoins((coins) => [
      { id: 1, completed: false, title: "1", count: 0, img: "img" },
      { id: 2, completed: false, title: "2", count: 0, img: "img" },
      { id: 3, completed: false, title: "3", count: 0, img: "img" },
    ]);
  }

  return (
    <View>
      <Text style={styles.text} onPress={() => setIsModalWindow(true)}>
        Как гадать ?
      </Text>
      <View style={gStyle.main}>
        <Modal visible={isModalWindow}>
          <AntDesign
            name="closecircle"
            size={24}
            color="red"
            onPress={() => setIsModalWindow(false)}
          />

          <ModalWindow />
        </Modal>
      </View>

      <Image
        style={{ width: "100%", height: 120 }}
        source={require("../../../images/chinaCoins.jpg")}
      />

      <Text style={styles.text}>text</Text>

      {result6 < 7 ? (
        <View>
          <Coins
            result6={result6}
            toggleCoinsHandler={toggleCoinsHandler}
            coins={coins}
            count3={count3}
            answers={answers}
            clearHandler={clearHandler}
            img={img}
          />
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={loadSceneResult}>
            <Text style={styles.text}>text</Text>
          </TouchableOpacity>
        </View>
      )}
      <StatusBar style="auto" />
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
