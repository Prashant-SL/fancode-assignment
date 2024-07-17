# MovieFlix

This project is a MovieFlix that displays a list of movies from The Movie Database (TMDb) API. The app shows top movies for each year, allows users to filter by genre, and loads top movies from previous/next years as the user scrolls through the list.

## Features

### Layout and UI
- Custom UI components using React Native and TailwindCSS (NativeWind) for reusability.
- Displays a list of movies sorted in descending order of popularity.
- Each movie information card shows:
  - Movie title
  - Poster image

### Default Page Load State
- Loads a total of 20 movies for each year.
- Displays a list of movies from the year 2012 by default.
- Smooth scrolling to load more movies as the user scrolls in any direction:
  - Loads movies of the previous year when the user scrolls up.
  - Loads movies of the next year when the user scrolls down.
- Ensures smooth interaction without causing any jitters.

### API
- Uses the following URL to query a list of movies:
  `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=2012&page=1&vote_count.gte=100`
- To fetch movies for a specific year, uses `primary_release_year` filter.
- Fetches genres from TMDb API and shows genres as filters.
- Filters movies by selected genres.

## Mock Data
As the TMDb API might not be accessible from certain regions, mock data has been created to simulate API responses. This mock data includes movie details for years 2012 to 2015.

### Genre Filter
We can easily filter out the movies list based on the genres.

## Code Quality
- Well-structured and maintainable code.
- React Native for building the app.
- Avoids using any pre-built component libraries (e.g., Bootstrap, Tailwind, etc.) for creating UI components.

## Bonus Features
- Ensures smooth scrolling even when more and more movies are loaded.
- Implements a search bar that searches for the movie based on the search string and displays an infinite loading list of matching movies.
- Uses TypeScript for enhanced type safety and code quality.

## Setup and Installation

### Prerequisites
- Node.js
- npm or yarn
- React Native CLI
- Android Studio / Xcode (for Android / iOS development)

### Steps

1. **Clone the repository:**
   git clone https://github.com/yourusername/movie-information-app.git

2. **Navigate to the project directory:**
cd ./

3. **Install dependencies:**
npm install
# or
yarn install

4. **Start the Metro bundler:**
npm start
# or
yarn start

5. **Run the app on an Android/iOS emulator or a physical device:**
npm run android
# or
npm run ios

Contact
For any queries, please contact prashantslxmath@gmail.com.