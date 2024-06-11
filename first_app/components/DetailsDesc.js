import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Title } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsDesc = ({ data }) => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

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
              fontSize: SIZES.medium,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {readMore
              ? data.description
              : `${data.description.slice(0, 100)}...`}
          </Text>
          {data.description.length > 100 && (
            <TouchableOpacity
              onPress={toggleReadMore}
              style={{
                marginTop: SIZES.base,
              }}
            >
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: SIZES.small,
                  fontFamily: FONTS.semiBold,
                }}
              >
                {readMore ? "Свернуть" : "Читать далее"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;