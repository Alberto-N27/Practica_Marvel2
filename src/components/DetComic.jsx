import { useEffect, useState } from 'react';

const API_BASE_URL = 'https://gateway.marvel.com:443/v1/public';
const API_KEY = '?ts=1&apikey=63a99bd979656ba319701d6dceac15d9&hash=dc30c87d19b610bceb0ce8598d8aff04';

const DetComic = ({ comicId, onFav }) => {
  const [comic, setComic] = useState(null);

  useEffect(() => {
    const cargarComic = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/comics/${comicId}${API_KEY}`);
        const data = await response.json();
        setComic(data.data.results[0]);
      } catch (error) {
        console.error("Error al obtener los detalles del cómic:", error);
      }
    };
    cargarComic();
  }, [comicId]);

  if (!comic) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{comic.title}</h2>
      <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
      <p>{comic.description}</p>
      <h3>Personajes</h3>
      <ul>{comic.characters && comic.characters.items && comic.characters.items.length > 0 ? (
        comic.characters.items.map((character, index) => (
          <li key={index}>
            <p>{character.name}</p>
          </li>
        ))
        ) : (
        <p>No hay informacion sobre los personajes</p>
      )}
      </ul>
      <button onClick={() => onFav(comic)}>Agregar a Favoritos</button>
    </div>
  );
};

export default DetComic;