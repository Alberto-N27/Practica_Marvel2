import React, { useState } from 'react';
import FeedComic from './components/FeedComic';
import DetComic from './components/DetComic';
import Fav from './components/FavButton';
import './App.css'

const App = () => {
  const [selComicId, setSelComicId] = useState(null);
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  const handleAddFavorite = (comic) => {
    const updatedFavorites = [...favoritos, comic];
    setFavoritos(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleRemoveFavorite = (comicId) => {
    const updatedFavorites = favoritos.filter(fav => fav.id !== comicId);
    setFavoritos(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Marvel Comics</h1>
      <FeedComic onSelComic={setSelComicId} />
      {selComicId && (
        <DetComic comicId={selComicId} onFav={handleAddFavorite} />
      )}
      <Fav fav={favoritos} onRemoveFav={handleRemoveFavorite} />
    </div>
  );
};

export default App;