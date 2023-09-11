import { Movie, MovieDetails } from '@nx-conf-2023/shared-types';

const movies: Movie[] = [
  {
    id: 'dog-yoga',
    title: 'Dog Yoga',
  },
];

const movieDetails: Record<string, MovieDetails> = {
  'dog-yoga': {
    id: 'dog-yoga',
    title: 'Dog Yoga',
    video: 'https://i.imgur.com/IcuAXiw.mp4',
    tagline:
      "Can true balance be found on a yoga mat, or is it hidden in the chaotic love of man's best friend? 🐾  ",
    description:
      "This Fall, prepare to bend your expectations and stretch your imagination! Meet Dave, a stressed-out workaholic seeking solace in the ancient art of yoga. But just as he's about to nail that elusive Handstand Scorpion, in bursts Max—a Golden Retriever with the soul of a saint but the timing of a trickster.",
  },
};

export function getMovies() {
  return movies;
}
`c`
export function getMovieDetails(id: string) {
  return movieDetails[id];
}
