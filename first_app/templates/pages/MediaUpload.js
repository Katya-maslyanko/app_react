import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Video } from "react-native-video";
import { COLORS, SIZES, FONTS, assets } from "../../constants";
import { CircleButton } from "../../components/Button";

const MediaUpload = () => {
  // Получаем объект навигации с помощью хука useNavigation
  const navigation = useNavigation();
  // Состояние выбранных медиа-файлов и флаг, определяющий, содержит ли выбранное медиа видео
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [isVideo, setIsVideo] = useState(false);
  // Функция, обрабатывающая выбор медиа-файлов
  const handleMediaPicker = async () => {
    // Открываем библиотеку изображений и разрешаем множественный выбор
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
    });

    // Если пользователь не отменил выбор и выбрал какие-либо файлы
    if (!result.cancelled && result.assets) {
      // Сохраняем выбранные медиа-файлы и обновляем состояние isVideo
      setSelectedMedia(result.assets);
      setIsVideo(result.assets.some((item) => item.type === "video"));
    }
  };

  // Функция, обрабатывающая нажатие на кнопку "Отобразить"
  const handleShowMedia = () => {
    // Если есть выбранные медиа-файлы
    if (selectedMedia?.length > 0) {
      // Обновляем состояние isVideo в зависимости от выбранных медиа
      setIsVideo(selectedMedia.some((item) => item.type === "video"));
      // Сохраняем выбранные медиа-файлы
      setSelectedMedia(selectedMedia);
    }
  };

  // Функция для отрисовки каждого медиа-элемента
  const renderMediaItem = ({ item }) => {
    try {
      // Отрисовываем видео или изображение в зависимости от типа элемента
      return (
        <View style={styles.mediaItem}>
          {item.type === "video" ? (
            <Video
              source={{ uri: item.uri }}
              style={styles.videoContainer}
              resizeMode="contain"
              useNativeControls
            />
          ) : (
            <Image source={{ uri: item.uri }} style={styles.media} />
          )}
        </View>
      );
    } catch (error) {
      // Логируем любые ошибки, возникающие при отрисовке
      console.error("Error rendering media item:", error);
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Отрисовываем кнопку "Назад" в хедере */}
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.navigate("Home")}
          left={15}
          top={StatusBar.currentHeight + 10}
        />
      </View>
      <View style={styles.addMediaContainer}>
        {/* Отрисовываем кнопку "Загрузить медиа" */}
        <TouchableOpacity style={styles.addMediaButton} onPress={handleMediaPicker}>
          <Text style={styles.addMediaButtonText}>Загрузить медиа</Text>
        </TouchableOpacity>
        {/* Отрисовываем кнопку "Отобразить" */}
        <TouchableOpacity style={styles.showMediaButton} onPress={handleShowMedia}>
          <Text style={styles.showMediaButtonText}>Отобразить</Text>
        </TouchableOpacity>
      </View>
      {/* Если есть выбранные медиа-файлы, отрисовываем их в виде сетки */}
      {selectedMedia && selectedMedia.length > 0 && (
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
    marginTop: 20,
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
  },
  addMediaButtonText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  showMediaButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.font,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.font,
  },
  showMediaButtonText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  mediaContainer: {
    flex: 1,
    borderRadius: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
  },
  mediaGrid: {
    padding: SIZES.font,
  },
  mediaItem: {
    width: "33.33%",
    height: 100,
    padding: SIZES.small,
  },
  media: {
    width: "100%",
    height: "100%",
  },
  videoContainer: {
    width: "100%",
    height: 200,
  },
});

export default MediaUpload;