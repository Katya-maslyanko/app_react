import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import { COLORS, SIZES, assets, SHADOWS } from "../../constants";
import { CircleButton, SubInfo, DetailsDesc, FocusedStatusBar } from "../../components";
import { useNavigation } from "@react-navigation/native";

// Компонент заголовка экрана деталей и кнопкк назад в Home
const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.navigate("Home")}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

// Главный компонент экрана деталей
const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Компонент строки состояния, адаптированной для навигации */}
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      {/* FlatList для отображения списка элементов */}
      <FlatList
        data={data.bids}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            {/* Вызов компонента заголовка */}
            <DetailsHeader data={data} navigation={navigation} />
            {/* Вызов компонента дополнительной информации */}
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              {/* Вызов компонента описания деталей */}
              <DetailsDesc data={data} />
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;