// Импорт необходимых модулей и библиотек
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Card from '../Card';

// Описание тестового блока для компонента Card
describe('Card component', () => {
  // Описание конкретного теста, проверяющего правильное отображение компонента
  it('Правильное отображение компонента', () => {
    // Создание тестовых данных для компонента Card
    const data = {
      image: 'https://example.com/image.png',
      name: 'Стоимость разработки мобильного приложения',
      creator: 'Команда «Иностудио»',
    };

    // Рендеринг компонента Card внутри NavigationContainer
    const { toJSON } = render(
      <NavigationContainer>
        <Card data={data} />
      </NavigationContainer>
    );

    // Проверка, что результат рендеринга соответствует ожидаемому снимку (snapshot)
    expect(toJSON()).toMatchSnapshot();
  });
});