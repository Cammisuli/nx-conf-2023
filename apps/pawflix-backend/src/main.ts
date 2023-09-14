import express from 'express';
import useMovies from '@nx-conf-2023/backend/pawflix-movies';
import useReviews from '@nx-conf-2023/backend/pawflix-reviews';

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

useMovies(app);
useReviews(app);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
