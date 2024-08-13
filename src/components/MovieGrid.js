import Movie from "./Movie";
import movie1 from "../gallery/gallery-1.jpg";
import movie2 from "../gallery/gallery-2.jpg";
import movie3 from "../gallery/gallery-3.jpg";
import movie4 from "../gallery/gallery-4.jpg";
import movie5 from "../gallery/gallery-5.jpg";

const MovieGrid = () => {
  const movies = [
    {
      image: movie1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      image: movie2,
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      image: movie3,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    },
    {
      image: movie4,
      title: "12 Angry Men",
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    },
    {
      image: movie5,
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
    },
  ];
  
  return (
    <div className="movie-box">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          image={movie.image}
          title={movie.title}
          desc={movie.description}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
