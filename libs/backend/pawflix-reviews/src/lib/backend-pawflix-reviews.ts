import { Express } from 'express';
import {
  addPawRatingToDatastore,
  getPawRatingFromDatastore,
} from '@nx-conf-2023/backend/pawflix-database';

export function addPawRating(movieId: string, paws: number) {
  addPawRatingToDatastore(movieId, paws);
}

export function getPawRating(movieId: string) {
  const paws = getPawRatingFromDatastore(movieId);
  return { paws };
}

export default function backendPawflixReviews(app: Express) {
  app.get('/rating/:id', (req, res) => {
    const rating = getPawRating(req.params.id);

    res.send(rating);
  });

  app.post('/rating/:id', (req, res) => {
    const paws = req.body.paws;
    addPawRating(req.params.id, paws);

    res.send({ paws });
  });
}
