import assets from "./assets";

const PostData = [
  {
    id: "01",
    name: "Новый пост",
    creator: "Екатерина Маслянко",
    description:
      "Этот потс про IT. Сегодня мы будем разрабатывать проект на React-native с помощью Expo Go. Давайте начнем этот проект.",
    image: assets.image04,
    bids: [
      {
        id: "BID-11",
        name: "Екатерина Шигина",
        image: assets.person02,
        date: "8 Мая, 2024 год",
      },
    ],
  },
  {
    id: "02",
    name: "Мой пост",
    creator: "Екатерина Маслянко",
    description:
      "Этот потс про IT. Сегодня мы будем разрабатывать проект на React-native с помощью Expo Go. Давайте начнем этот проект.",
    image: assets.image05,
    bids: [
      {
        id: "BID-13",
        name: "Тамир Сундуреев",
        image: assets.person04,
        date: "8 Мая, 2024 год",
      },
    ],
  },
  {
    id: "03",
    name: "Твой пост",
    creator: "Екатерина Маслянко",
    description:
      "Этот потс про IT. Сегодня мы будем разрабатывать проект на React-native с помощью Expo Go. Давайте начнем этот проект.",
    image: assets.image06,
    bids: [
      {
        id: "BID-11",
        name: "Екатерина Шигина",
        image: assets.person02,
        date: "8 Мая, 2024 год",
      },
    ],
  },
  {
    id: "04",
    name: "Нащ пост",
    creator: "Екатерина Маслянко",
    description:
      "Этот потс про IT. Сегодня мы будем разрабатывать проект на React-native с помощью Expo Go. Давайте начнем этот проект.",
    image: assets.image07,
    bids: [
      {
        id: "BID-11",
        name: "Екатерина Шигина",
        image: assets.person02,
        date: "8 Мая, 2024 год",
      },
    ],
  },
];

export { PostData };
