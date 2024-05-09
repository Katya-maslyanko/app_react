// Импортируем React и необходимые библиотеки для навигации
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Создаем экземпляр StackNavigator, который будет использоваться для создания навигации на основе стека
const Stack = createNativeStackNavigator();

// Настраиваем тему для навигации, изменяя цвет фона на прозрачный
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

// Импортируем компоненты экранов
import Home from "./templates/pages/Home";
import Details from "./templates/pages/Details";

// Определяем основной компонент App
const App = () => {
  return (
    // Обертываем все приложение в NavigationContainer и применяем настроенную тему
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        // Настраиваем опции для заголовка экрана, скрывая его
        screenOptions={{
          headerShown: false,
        }}
        // Определяем начальный экран, который будет отображаться при запуске приложения
        initialRouteName="Home"
      >
        {/* Регистрируем экран Home и задаем ему имя "Home" */}
        <Stack.Screen name="Home" component={Home} />
        {/* Регистрируем экран Details и задаем ему имя "Details" */}
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Экспортируем компонент App как корневой компонент приложения
export default App;