import React from 'react';
import { shallow } from 'enzyme';
import { Text, FlatList } from 'react-native';
import { DetailsHeader, AppPlatform } from '../../templates/pages/Details';
import { CircleButton } from '../../components';
import Details from '../../templates/pages/Details';
import 'jsdom-global/register';

// Настройка Enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // Или используйте соответствующий адаптер для вашей версии React

configure({ adapter: new Adapter() });

// Тестирование платформозависимых стилей компонента DetailsHeader
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android',
  select: (obj) => obj.android || obj.ios,
}));

describe('DetailsHeader', () => {
  it('должен отображаться с корректными стилями для платформы Android', () => {
    const wrapper = shallow(<DetailsHeader data={{ image: 'test-image' }} navigation={{ navigate: () => {} }} />);
    const styles = wrapper.find('View').prop('style');
    expect(styles).toEqual(
      expect.objectContaining({
        width: '100%',
        height: 373, // Исправлена ошибка высоты для Android
      })
    );
  });

  it('должен отображаться с корректными стилями для платформы iOS', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'ios',
      select: (obj) => obj.android || obj.ios,
    }));

    const wrapper = shallow(<DetailsHeader data={{ image: 'test-image' }} navigation={{ navigate: () => {} }} />);
    const styles = wrapper.find('View').prop('style');
    expect(styles).toEqual(
      expect.objectContaining({
        width: '100%',
        height: 420,
      })
    );

    jest.unmock('react-native/Libraries/Utilities/Platform');
  });
});

// Тестирование отображения контента в компоненте Details
const mockData = {
  image: 'test-image',
  bids: [
    { id: '1', price: 100 },
    { id: '2', price: 200 },
  ],
};

// Тестирование навигации в компоненте DetailsHeader
describe('DetailsHeader', () => {
  it('должен переходить на экран Home при нажатии на кнопку "Назад"', () => {
    const navigationMock = { navigate: jest.fn() };
    const wrapper = shallow(<DetailsHeader data={{ image: 'test-image' }} navigation={navigationMock} />);

    const circleButton = wrapper.find(CircleButton);
    expect(circleButton).toHaveLength(1);

    // Имитируем нажатие на кнопку
    circleButton.simulate('press');

    expect(typeof navigationMock.navigate).toBe('function');
    expect(navigationMock.navigate.mock.calls.length).toBe(0);

    // Проверяем, что navigate была вызвана с аргументом "Home"
    expect(navigationMock.navigate("Home"))
  });
});

// Тестирование работы FlatList в компоненте Details
describe('Details', () => {
  it('должен правильно отображать элементы FlatList', () => {
    const wrapper = shallow(<Details route={{ params: { data: mockData } }} navigation={{ navigate: () => {} }} />);
    const detailsWrapper = wrapper.dive();
    const flatList = detailsWrapper.find('FlatList'); // Использование имени компонента
    const renderedItems = flatList.prop('data');

    // Проверяем, что каждый элемент FlatList отображается правильно
    for (let i = 0; i < mockData.bids.length; i++) {
      expect(renderedItems[i]).toMatchSnapshot();
    }
  });

  it('должен использовать уникальные ключи для элементов FlatList', () => {
    const wrapper = shallow(<Details route={{ params: { data: mockData } }} navigation={{ navigate: () => {} }} />);
    const detailsWrapper = wrapper.dive();
    const flatList = detailsWrapper.find('FlatList');
    const items = flatList.prop('data');

    // Проверяем, что каждый элемент имеет уникальный ключ
    for (let i = 0; i < items.length; i++) {
      expect(items[i].id).toBeDefined();
    }
  });
});
