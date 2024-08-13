const Movie = ({ image, title, desc }) => {
    return (
      <div className="movie">
        <div className="movie_poster">
          <img src={image} alt={image} />
        </div>
        <div className="movie_title">{title}</div>
        <div className="movie_description">{desc}</div>
      </div>
    );
  };
  
  export default Movie;
  