import { addPawRating } from './backend-pawflix-reviews';

describe('reviews', () => {
  it('should add a review', () => {
    expect(() => addPawRating('dog-yoga', 1)).not.toThrow();
  });
});
