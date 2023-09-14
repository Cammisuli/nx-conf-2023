import { addReview } from './backend-pawflix-reviews';

describe('reviews', () => {
  it('should add a review', () => {
    expect(() => addReview('dog-yoga', 1)).not.toThrow();
  });
});
