import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, StatusBar, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Video } from "react-native-video";
import { COLORS, SIZES, FONTS, assets } from "../../constants";
import { CircleButton } from "../../components/Button";
import Entypo from "@expo/vector-icons/Entypo";

const MediaUpload = () => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Извините, нам нужны разрешения на съемку камеры, чтобы это работало!');
        }
      }
    })();
  }, []);
  // Получаем объект навигации с помощью хука useNavigation
  const navigation = useNavigation();
  // Состояние выбранных медиа-файлов и флаг, определяющий, содержит ли выбранное медиа видео
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [showMedia, setShowMedia] = useState(false);


  // Функция для открытия библиотеки мультимедиа и выбора файлов
  const handleMediaPicker = async () => {
    // Открываем библиотеку изображений и разрешаем множественный выбор, но запрещаем выбор видео
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (!result.canceled && result.assets) {
      setSelectedMedia(result.assets);
      setShowMedia(false);
    }
  };

  // Функция, обрабатывающая нажатие на кнопку "Отобразить"
  const handleShowMedia = () => {
    setShowMedia(true);
  };

  const handleClearMedia = () => {
    setSelectedMedia([]);
    setShowMedia(false);
  };
 

  const renderMediaItem = ({ item }) => {
    try {
      return (
        <View style={styles.mediaItem}>
          <Image source={{ uri: item.uri }} style={styles.largeMedia} />
        </View>
      );
    } catch (error) {
      console.error("Ошибка рендеринга медиа-элемента.:", error);
      return null;
    }
  };
 

  // Стили, адаптированные под платформу
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: SIZES.font,
      marginTop: Platform.OS === "ios" ? 40 : 20,
    },
    addMediaContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: COLORS.gray,
      borderRadius: SIZES.font,
      paddingVertical: SIZES.small,
      paddingHorizontal: SIZES.font,
      marginBottom: SIZES.font,
      marginTop: 50,
    },
    addMediaButton: {
      backgroundColor: COLORS.gray,
      borderRadius: SIZES.font,
      paddingVertical: SIZES.small,
      paddingHorizontal: SIZES.font,
      fontSize: Platform.OS === "ios" ? SIZES.medium : SIZES.small,
    },
    addMediaButtonText: {
      fontFamily: FONTS.bold,
      fontSize: Platform.OS === "ios" ? SIZES.medium : SIZES.small,
      color: COLORS.white,
    },
    showMediaButton: {
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.font,
      paddingVertical: SIZES.small,
      paddingHorizontal: SIZES.font,
      fontSize: Platform.OS === "ios" ? SIZES.medium : SIZES.small,
    },
    showMediaButtonText: {
      fontFamily: FONTS.bold,
      fontSize: Platform.OS === "ios" ? SIZES.medium : SIZES.small,
      color: COLORS.white,
    },
    mediaContainer: {
      flex: 1,
      borderRadius: SIZES.font,
      justifyContent: "center",
      alignItems: "center",
    },
    mediaGrid: {
      padding: SIZES.base,
    },
    mediaItem: {
      width: '33%',
      height: Platform.OS === "ios" ? 180 : 150,
      padding: SIZES.small,
    },
    media: {
      width: "100%",
      height: "100%",
    },
    clearMediaButton: {
      backgroundColor: COLORS.primary,
      padding: 10,
      borderRadius: 10,
      marginLeft: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    clearMediaIcon: {
      width: 20,
      height: 20,
      tintColor: COLORS.white,
    }, 
    largeMedia: {
      width: '100%',
      height: "100%",
      borderRadius: 5,
    },     
  });

  return (
    <View style={styles.container}>
      {/* Заголовок с кнопкой для навигации назад */}
      <View style={styles.header}>
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.navigate("Home")}
          left={15}
          top={StatusBar.currentHeight + 10}
        />
      </View>

      {/* Контейнер для кнопок "Загрузить медиа", "Отобразить" и "Очистить" */}
      <View style={styles.addMediaContainer}>
        <TouchableOpacity style={styles.addMediaButton} onPress={handleMediaPicker}>
          <Text style={styles.addMediaButtonText}>Загрузить медиа</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.showMediaButton} onPress={handleShowMedia}>
          <Text style={styles.showMediaButtonText}>Отобразить</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearMediaButton} onPress={handleClearMedia}>
          <Entypo name="cross" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {/* Условное отображение контейнера с выбранными медиафайлами */}
      {showMedia && selectedMedia.length > 0 && (
        <View style={styles.mediaContainer}>
          <FlatList
            data={selectedMedia}
            keyExtractor={(item) => item.uri}
            numColumns={3}
            renderItem={renderMediaItem}
            contentContainerStyle={styles.mediaGrid}
          />
        </View>
      )}
    </View>
  );
};

export default MediaUpload;