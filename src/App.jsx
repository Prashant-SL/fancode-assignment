import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const API_KEY = '2dca580c2a14b55200e784d157207b4d';

  useEffect(() => {
    console.log("hello")
    fetchMovies();
  });

  const fetchMovies = async () => {
    // setLoading(true);
    // setError('');
    const selectedGenre = '';

    const genreFilter = selectedGenre !== 'all' ? `&with_genres=${selectedGenre}` : '';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&vote_count.gte=100${genreFilter}`;

    try {
      console.log('Fetching movies from:', url);
      const response = await fetch(proxyUrl + url);
      const data = await response.json();
      console.log('Response data:', data);
      // setMovieData(prevMovies => year === 2012 ? response.data.results : [...prevMovies, ...response.data.results]);
    } catch (error) {
      // setError('Error fetching movies: ' + error.message);
      console.error('Error fetching movies:', error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
