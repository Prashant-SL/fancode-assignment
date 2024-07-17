import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import moviePoster from '../assets/movieposter.png';

const MovieList = ({ movieMockdata }) => {
  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 50 }}>
      {Object.keys(movieMockdata).map((year) => (
        <View key={year} className="mb-8">
          <Text className="text-2xl text-white mb-3 ml-2 font-bold">{year}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', rowGap: 16 }}>
            {movieMockdata[year].map((item, index) => (
              <View key={index} className={`border-2 w-[45%] relative h-64 mb-4 ${index % 2 == 0 ? "mr-8" : ""}`}>
                <Image
                  source={moviePoster}
                  style={{ width: '100%', height: '100%' }}
                />
                <Text className="text-left text-white absolute bottom-2.5 left-3 text-base w-[80%]">{item.title}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default MovieList;
