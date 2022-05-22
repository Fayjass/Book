import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AboutBook from "../screens/aboutBook/AboutBook";
import Definition from "../screens/definition/definition-online/Definition";
import Finish from "../screens/finish/Finish";
import Main from "../screens/main/Main";
import Archive from "../screens/archive/Archive";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Главная"
          component={Main}
          option={{ title: "Главная страница" }}
        />
        <Stack.Screen
          name="Всё о книге перемен"
          component={AboutBook}
          option={{ title: "О книге перемен" }}
        />
        <Stack.Screen
          name="Гадание"
          component={Definition}
          option={{ title: "Гадание" }}
        />
        <Stack.Screen
          name="Ответ из Книги Перемен"
          component={Finish}
          option={{ title: "Ответ" }}
        />
        <Stack.Screen
          name="Архив"
          component={Archive}
          option={{ title: "Архив" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
