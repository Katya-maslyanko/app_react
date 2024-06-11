// Импортируем необходимые модули и компоненты
import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Platform, TouchableOpacity } from "react-native";
import { Card, HomeHeader, FocusedStatusBar } from "../../components";
import { COLORS, PostData, SIZES, SHADOWS } from "../../constants";
  
const Home = () => {
    // Определяем состояние PostData и функцию sePostData для управления данными Post
    const [searchText, setSearchText] = useState("");
    const [filteredPosts, setFilteredPosts] = useState(PostData);    

    // Функция обработки поиска
    const handleSearch = (value) => {
        setSearchText(value);
        const filtered = PostData.filter((post) =>
          post.name && post.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredPosts(filtered);
      };               

    // Определяем стили в зависимости от платформы
    const styles = Platform.select({
        ios: {
        container: {
            flex: 1,
            backgroundColor: COLORS.primary,
        },
        headerContainer: {
            zIndex: 0,
            backgroundColor: COLORS.primary,
        },
        },
        android: {
        container: {
            flex: 1,
            backgroundColor: COLORS.secondary,
        },
        headerContainer: {
            zIndex: 0,
            backgroundColor: COLORS.secondary,
        },
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            {/* Настраиваем цвет строки состояния */}
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    {/* Отображаем списком данные Post с помощью FlatList */}
                    <FlatList
                    data={filteredPosts}
                    renderItem={({ item }) => <Card data={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader onSearch={handleSearch} value={searchText} />}
                    />
                </View>

                {/* Этот View используется для создания эффекта наложения */}
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        zIndex: -1,
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;