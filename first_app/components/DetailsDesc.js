import React, { useState } from "react";
import { View, Text } from "react-native";
import { Title } from "./SubInfo"; // Импортируем компонент Title из файла SubInfo
import { COLORS, SIZES, FONTS } from "../constants"; // Импортируем константы из файла constants

const DetailsDesc = ({ data }) => {
  // Используем хук useState для управления состоянием текста описания и флага readMore
  const [text, setText] = useState(data.description.slice(0, 100)); // Изначально отображаем первые 100 символов описания
  const [readMore, setReadMore] = useState(false); // Изначально флаг readMore установлен в false

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Отображаем компонент Title с данными из props */}
        <Title
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Описание поста:
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {/* Отображаем текст описания */}
            {text}
            {/* Если readMore не установлен, отображаем многоточие (...) */}
            {!readMore && "..."}
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;