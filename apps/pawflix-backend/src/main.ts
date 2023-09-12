import express from 'express';
import {
  getMovieDetails,
  getMovies,
} from '@nx-conf-2023/backend/pawflix-database';
import { join } from 'path';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(
  '/images',
  express.static(join(__dirname, 'images'), {
    extensions: ['png'],
  })
);

app.use(
  '/videos',
  express.static(join(__dirname, 'videos'), {
    extensions: ['mp4'],
  })
);

app.get('/movies', (req, res) => {
  const movies = getMovies();

  res.send(movies);
});

app.get('/movies/:id', (req, res) => {
  const moviedId = req.params.id;
  const movieDetails = getMovieDetails(moviedId);

  res.send(movieDetails);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
