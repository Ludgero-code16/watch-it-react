
/* I use this component for every movie on the page */
function MovieCard({ title, description, image, featured = false }) {
  return (
    <article className={`movie-card ${featured ? "featured" : ""}`}>
      {/* Show the movie poster */}
      <img
        className="movie-poster"
        src={image}
        alt={`${title} movie poster`}
      />

      {/* Show the movie details and button */}
      <div className="movie-details">
        <div className="movie-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <button className="watch-button" type="button">
          WATCH NOW
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
