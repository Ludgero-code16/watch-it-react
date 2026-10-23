
/* I import my header and movie card components */
import Header from "./components/Header.jsx";
import MovieCard from "./components/MovieCard.jsx";
import "./App.css";

/* I store all six movies in an array to avoid repeating JSX */
const movies = [
  {
    title: "Who Framed Roger Rabbit (1988)",
    image: "/assets/who-framed-roger-rabbit.jpg",
    genre: "comedy",
    description:
      "In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!",
  },
  {
    title: "Hook (1991)",
    image: "/assets/hook.jpg",
    genre: "action",
    description:
      "Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.",
  },
  {
    title: "La La Land (2016)",
    image: "/assets/la-la-land.jpg",
    genre: "romance",
    description:
      "Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!",
  },
  {
    title: "Hidden Figures (2016)",
    image: "/assets/hidden-figures.jpg",
    genre: "drama",
    description:
      "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
  {
    title: "Palm Springs (2020)",
    image: "/assets/palm-springs.jpg",
    genre: "romance",
    description:
      "A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.",
  },
  {
    title: "Barbie (2023)",
    image: "/assets/barbie.jpg",
    genre: "comedy",
    description:
      "Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!",
  },
];

/* This is the main component of my website */
function App() {
  return (
    <>
      {/* Display the navigation header */}
      <Header />

      {/* Display all the movie cards */}
      <main className="movie-container" id="movies">
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            description={movie.description}
            image={movie.image}
            featured={index === 0}
          />
        ))}
      </main>
    </>
  );
}

export default App;
