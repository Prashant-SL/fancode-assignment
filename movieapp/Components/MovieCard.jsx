import { View, Text, Image } from 'react-native';
import React from 'react';

const MovieCard = ({ movieDetail }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`;

    return (
        <View className="relative border-2 border-yellow-300 h-48 w-[47%] rounded-sm mb-5">
            <Image source={{ uri: imageUrl }} className="h-full w-full rounded-sm" />
            <View className="absolute bottom-1 left-2">
                <Text className="text-white text-sm">{movieDetail.title}</Text>
                <Text className="text-white text-xs">{movieDetail.vote_average}</Text>
            </View>
        </View>
    );
};

export default MovieCard;
