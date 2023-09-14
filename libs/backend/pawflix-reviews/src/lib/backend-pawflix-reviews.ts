import { Express } from 'express';
import {
  addReviewToDatastore,
  getReviewFromDatastore,
} from '@nx-conf-2023/backend/pawflix-database';

export function addReview(movieId: string, paws: number) {
  addReviewToDatastore(movieId, paws);
}

export function getReviews(movieId: string) {
  return getReviewFromDatastore(movieId);
}

export default function backendPawflixReviews(app: Express) {
  app.get('/reviews/:id', (req, res) => {
    const reviews = getReviews(req.params.id);

    res.send(reviews);
  });

  app.post('/reviews/:id', (req, res) => {
    addReview(req.params.id, req.body.paws);
  });
}
