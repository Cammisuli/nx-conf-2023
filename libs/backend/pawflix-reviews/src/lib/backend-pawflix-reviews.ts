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
    addPawRating(req.params.id, req.body.paws);
  });
}
