import { render } from '@testing-library/react';

import PawsRating from './paws-rating';

describe('PawsRating', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PawsRating />);
    expect(baseElement).toBeTruthy();
  });
});
