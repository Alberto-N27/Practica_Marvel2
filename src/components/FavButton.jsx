const Fav = ({ fav, onRemoveFav }) => {
  return (
    <div>
      <h2>Mis Favoritos</h2>
      <ul>
        {fav.map(comic => (
          <li key={comic.id}>
            <h3>{comic.title}</h3>
            <button onClick={() => onRemoveFav(comic.id)}>Quitar de favoritos</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fav;