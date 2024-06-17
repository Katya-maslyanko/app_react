module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native|expo-.*|@expo/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules-.*|react-native-video|expo-font|expo-asset)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@expo/(.*)$': '<rootDir>/node_modules/@expo/$1',
    '^react-native$': require.resolve('react-native'),
    '^expo-constants$': '<rootDir>/__mocks__/expo-constants.js',
    '^expo-font$': '<rootDir>/__mocks__/expo-font.js',
    '^@expo/vector-icons$': '<rootDir>/__mocks__/@expo/vector-icons.js',
  },
};