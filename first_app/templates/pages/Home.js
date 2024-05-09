// Импортируем необходимые модули и компоненты
import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import { Card, HomeHeader, FocusedStatusBar } from "../../components";
import { COLORS, PostData } from "../../constants";

const Home = () => {
    // Определяем состояние nftData и функцию setNftData для управления данными Post
    const [postData, setPostData] = useState(PostData);

    // Функция обработки поиска
    const handleSearch = (value) => {
        // Если поисковая строка пустая, восстанавливаем исходные данные
        if (value.length === 0) {
            setPostData(PostData);
        }

        // Фильтруем данные по названию , учитывая регистр
        const filteredData = PostData.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        // Если фильтрованные данные пусты, восстанавливаем исходные данные, иначе обновляем состояние
        if (filteredData.length === 0) {
            setPostData(PostData);
        } else {
            setPostData(filteredData);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Настраиваем цвет строки состояния */}
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
                <View style={{ zIndex: 0, backgroundColor: COLORS.primary }}>
                    {/* Отображаем списком данные Post с помощью FlatList */}
                    <FlatList
                        data={PostData}
                        renderItem={({ item }) => <Card data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
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