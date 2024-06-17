import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DetailsDesc from '../DetailsDesc'; // обновите путь до вашего компонента

// Создаем тестовые данные, которые будем передавать в компонент
const mockData = {
  name: 'Тестовое название',
  creator: 'Тестовый автор',
  description:
    'Это длинное описание, которое мы будем использовать для тестирования функциональности "Читать далее" в компоненте DetailsDesc. Это описание должно быть достаточно длинным, чтобы активировать функциональность "Читать далее".',
};

describe('Компонент DetailsDesc', () => {
  // Проверяем, что компонент правильно отображает название и автора
  test('Должен корректно отображать название и автора', () => {
    const { getByText } = render(<DetailsDesc data={mockData} />);

    // Проверяем, что на экране отображается название
    expect(getByText(mockData.name)).toBeTruthy();

    // Проверяем, что на экране отображается автор в формате "Писатель: Тестовый автор"
    expect(getByText(`Писатель: ${mockData.creator}`)).toBeTruthy();
  });

  // Проверяем, что компонент изначально отображает обрезанное описание
  test('Должен изначально отображать обрезанное описание', () => {
    const { getByText } = render(<DetailsDesc data={mockData} />);

    // Проверяем, что на экране отображается обрезанное описание и кнопка "Читать далее"
    expect(getByText(`${mockData.description.slice(0, 100)}...`)).toBeTruthy();
    expect(getByText('Читать далее')).toBeTruthy();
  });

  // Проверяем, что компонент переключает отображение полного описания при нажатии на кнопку
  test('Должен переключать отображение полного описания при нажатии на кнопку', () => {
    const { getByText, queryByText } = render(<DetailsDesc data={mockData} />);

    // Нажимаем на кнопку "Читать далее"
    const readMoreButton = getByText('Читать далее');
    fireEvent.press(readMoreButton);

    // Проверяем, что на экране отображается полное описание и кнопка "Свернуть"
    expect(getByText(mockData.description)).toBeTruthy();
    expect(getByText('Свернуть')).toBeTruthy();
    expect(queryByText(`${mockData.description.slice(0, 100)}...`)).toBeNull();

    // Нажимаем на кнопку "Свернуть"
    const collapseButton = getByText('Свернуть');
    fireEvent.press(collapseButton);

    // Проверяем, что на экране снова отображается обрезанное описание и кнопка "Читать далее"
    expect(getByText(`${mockData.description.slice(0, 100)}...`)).toBeTruthy();
    expect(getByText('Читать далее')).toBeTruthy();
  });
});
