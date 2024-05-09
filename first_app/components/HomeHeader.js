// Импортируем необходимые модули и компоненты
import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      {/* Контейнер для верхней части заголовка */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Контейнер для приветствия и заголовка */}
        <View style={{ marginVertical: SIZES.font }}>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.white,
            }}
          >
            Привет, Екатерина 👋
          </Text>

          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.medium,
              color: COLORS.white,
              marginTop: SIZES.base / 2,
            }}
          >
            Просмотр постов
          </Text>
        </View>

        {/* Контейнер для аватара пользователя */}
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person03}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>

      {/* Контейнер для поля поиска */}
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            color: COLORS.white,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Поиск постов"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;