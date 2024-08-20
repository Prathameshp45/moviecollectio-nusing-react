import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import MovieList from './components/MovieList ';
import MovieDetail from './components/MovieDetail ';
import AddMovie from './components/AddMovie ';
import './App.css';
function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', rating: 5, description: 'A mind-bending thriller' },
    { id: 2, title: 'Interstellar', rating: 4.5, description: 'A journey through space' },
    
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        <Route path="/add" element={<AddMovie addMovie={addMovie} />} />
      </Routes>
    </Router>
  );
}

export default App;