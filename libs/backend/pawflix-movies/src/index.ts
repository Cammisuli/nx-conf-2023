import { Express } from 'express';
import {
  getMovieDetails,
  getMovies,
} from '@nx-conf-2023/backend/pawflix-database';

export default function (app: Express) {
  app.get('/movies', (req, res) => {
    const movies = getMovies();

    res.send(movies);
  });

  app.get('/movies/:id', (req, res) => {
    const moviedId = req.params.id;
    const movieDetails = getMovieDetails(moviedId);

    res.send(movieDetails);
  });
}
