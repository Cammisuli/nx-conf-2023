import express from 'express';
import { getMovieDetails, getMovies } from '@nx-conf-2023/pawflix-database';
import { join } from 'path';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(
  '/images',
  express.static(join(__dirname, 'images'), {
    extensions: ['png'],
    setHeaders: (res) => {
      res.contentType('image/png');
    },
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
