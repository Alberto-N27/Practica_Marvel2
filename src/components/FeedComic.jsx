import { useEffect, useState } from 'react';

const API_BASE_URL = 'https://gateway.marvel.com:443/v1/public';
const API_KEY = '?ts=1&apikey=63a99bd979656ba319701d6dceac15d9&hash=dc30c87d19b610bceb0ce8598d8aff04'; 

const FeedComic = ({ onSelComic }) => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const cargarComics = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/comics${API_KEY}&orderBy=-issueNumber&limit=10`);
        const data = await response.json();
        setComics(data.data.results);
      } catch (error) {
        console.error("Error al obtener los cómics recientes:", error);
      }
    };
    cargarComics();
  }, []);

  return (
    <div>
      <h2>Comics Recientes</h2>
      <ul>
        {comics.map(comic => (
          <li key={comic.id} onClick={() => onSelComic(comic.id)}>
            <h3>{comic.title}</h3>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedComic;