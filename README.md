# Приложение PostApp

Это приложение представляет собой блог, где пользователи могут читать и просматривать посты в сфере мобильной разработки. Оно построено с использованием React Native и предоставляет интуитивно понятный интерфейс для чтения статей.

## Описание

Приложение позволяет пользователям:

- Просматривать список доступных постов с их заголовками, авторами и кратким описанием.
- Открывать детальный экран поста, где отображается полное описание, время чтения и другая информация.
- Переходить к главной странице и детальной поста с помощью навигации.
- Добавление своей галереи (медиа) для последующих своих постов. В будущем с реализацией бэка можно добавить не только медиа, но и саму информацию о своем посте в блоге.

## Технологии

Приложение построено с использованием следующих технологий:

- React Native: Основная библиотека для создания кросс-платформенных приложений.
- Expo: Платформа для разработки и развертывания React Native приложений.
- React Navigation: Библиотека для навигации между экранами приложения.

## Установка и запуск

Чтобы запустить приложение локально, выполните следующие шаги:

1. Клонируйте репозиторий:
https://github.com/Katya-maslyanko/app_react

2. Перейдите в директорию проекта:
cd app_react

3. Установите зависимости:
npm install

4. Запустите приложение в режиме разработки:
npx expo start

Это откроет Expo Developer Tools в вашем браузере. Вы можете использовать эти инструменты для запуска приложения на эмуляторе или физическом устройстве.

Для запуска на физическом устройстве вы должны установить приложение Expo Go на свое устройство и отсканировать QR-код из Expo Developer Tools.

## Структура проекта
first-app/
├── assets/
├── components/
├── constants/
├── request_emulation/
├── templates/
├── App.js
├── babel.config.js
├── package.json
└── README.md
- assets/: Директория для хранения изображений, шрифтов и других ресурсов.
- components/: Директория для повторно используемых компонентов React.
- constants/: Директория для хранения констант, таких как цвета, размеры, шрифты и т.д.
- templates/: Директория для основных экранов приложения.
- App.js: Корневой компонент React Native приложения.
- babel.config.js: Конфигурационный файл для Babel.
- package.json: Файл с зависимостями и скриптами для проекта.
- README.md: Этот файл с инструкциями и описанием проекта.
