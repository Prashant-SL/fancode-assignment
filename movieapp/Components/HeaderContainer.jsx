import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';

const HeaderContainer = ({ movieMockdata, selectedGenre, setSelectedGenre }) => {
    const groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
            currentValue[key].forEach(genre => {
                if (!result[genre]) {
                    result[genre] = [];
                }
                result[genre].push(currentValue);
            });
            return result;
        }, {});
    };

    const genres = ["all", ...Object.keys(groupBy(movieMockdata, 'genre_ids'))];

    return (
        <View className="p-4 bg-gray-800">
            <Text className="text-red-700 text-3xl font-bold">MOVIEFLIX</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="my-4">
                {
                    genres.map((genre, id) => {
                        return (
                            <View key={genre + id}>
                                <Text onPress={() => setSelectedGenre(genre)} className={`px-6 py-2 text-white text-base m-1 rounded-lg ${selectedGenre == genre ? 'bg-red-700' : 'bg-gray-500'}`}>
                                    {genre.charAt(0).toUpperCase() + genre.slice(1)}
                                </Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};

export default HeaderContainer;
