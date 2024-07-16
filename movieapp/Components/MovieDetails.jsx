import { View, Text, Image } from 'react-native'
import React from 'react'

const MovieDetails = ({ movieDetail }) => {
    const { backdrop_path, title, vote_average } = movieDetail;
    const imageUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

    return (
        <View className="realtive h-60 w-[47%] rounded-sm mb-5">
            <Image source={{ uri: imageUrl }} className="h-full w-full rounded-sm" />
            <View className="absolute bottom-2 left-2.5">
                <Text className='text-white text-sm'>{title}</Text>
                <Text className='text-white text-xs'>{vote_average}</Text>
            </View>
        </View>
    )
}

export default MovieDetails