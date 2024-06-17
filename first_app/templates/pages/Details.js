import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList,  Platform, StyleSheet} from "react-native";
import { COLORS, SIZES, assets, FONTS } from "../../constants";
import { CircleButton, SubInfo, DetailsDesc, FocusedStatusBar } from "../../components";
import { useNavigation } from "@react-navigation/native";
// Импортируем необходимые модули
import Constants from 'expo-constants';

// Компонент заголовка экрана деталей и кнопкк назад в Home
const DetailsHeader = ({ data, navigation }) => {
  // Определяем стили в зависимости от платформы
  const styles = Platform.select({
    ios: {
      container: {
        width: "100%",
        height: 420,
      },
      image: {
        width: "100%",
        height: "100%",
      },
    },
    android: {
      container: {
        width: "100%",
        height: 373,
      },
      image: {
        width: "100%",
        height: "100%",
      },
    },
  });

  return (
    <View style={styles.container}>
      <Image source={data.image} resizeMode="cover" style={styles.image} />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.navigate("Home")}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

// Компонент, показывающий платформу
const AppPlatform = () => {
  return (
    <View style={styles.platformContainer}>
      <Text style={styles.platformText}>
        {Platform.OS === 'ios' ? 'iOS' : 'Android'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  platformContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.font,
    borderRadius: SIZES.font,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  platformText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
});


// Главный компонент экрана деталей
const Details = ({ route, navigation }) => {
  const { data } = route.params;
  const styles = Platform.select({
    ios: StyleSheet.create({
      container: {
        flex: 1,
      },
      contentContainer: {
        paddingBottom: SIZES.extraLarge * 4, // Больший отступ снизу для iOS
      },
    }),
    android: StyleSheet.create({
      container: {
        flex: 1,
      },
      contentContainer: {
        paddingBottom: SIZES.extraLarge * 3, // Меньший отступ снизу для Android
      },
    }),
  });


  return (
    <SafeAreaView style={styles.container}>
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
        contentContainerStyle={styles.contentContainer}
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
    <AppPlatform />
    </SafeAreaView>
  );
};


export { DetailsHeader, AppPlatform };
export default Details;