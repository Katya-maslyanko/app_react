// Импортируем необходимые модули и компоненты
import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = (props) => {
  // Используем хук useIsFocused из @react-navigation/core
  // для определения, является ли текущий экран активным (фокусированным)
  const isFocused = useIsFocused();

  // Если экран фокусирован, отображаем StatusBar с переданными свойствами и анимацией
  // В противном случае не отображаем StatusBar
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;