import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const GenreButton = ({ detail, selected, onPress, selectedGenre }) => {
    return (
        <Pressable onPress={onPress}>
            <View className={`${selected ? 'bg-red-700' : 'bg-gray-700'} rounded-[4px] text-center px-3.5 py-1 mt-2 mr-4`}>
                <Text className="text-white">{detail.name}</Text>
            </View>
        </Pressable>
    );
};

export default GenreButton
