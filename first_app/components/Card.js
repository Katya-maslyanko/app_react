// Импортируем необходимые модули и компоненты
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants";
import { SubInfo, Title } from "./SubInfo";
import { RectButton } from "./Button";

const Card = ({ data }) => {
  // Получаем объект навигации из React Navigation
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      {/* Контейнер для изображения */}
      <View
        style={{
          width: "100%",
          height: 100,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>

      {/* Компонент для отображения дополнительной информации */}
      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        {/* Компонент для отображения названия и создателя  */}
        <Title
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {/* Кнопка для перехода на экран деталей  */}
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;