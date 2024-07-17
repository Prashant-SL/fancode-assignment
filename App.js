import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HeaderContainer from './Components/HeaderContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieList from './Components/MovieList';
import axios from 'axios';
import { apiResponse } from './db.js';


export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("all");

  const moviesByYear = {};

  for (let i = 0; i < apiResponse.length; i++) {
    const movie = apiResponse[i];
    const year = apiResponse[i].released;

    if (!moviesByYear[year]) {
      moviesByYear[year] = [];
    }

    if (selectedGenre === "all" || movie.genre_ids.includes(selectedGenre)) {
      moviesByYear[year].push(movie);
    }
  }



  return (
    <SafeAreaView className=" bg-gray-900 text-white flex-1">
      <HeaderContainer
        movieMockdata={apiResponse}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <MovieList movieMockdata={moviesByYear} />
    </SafeAreaView>
  );
}