import { render } from '@testing-library/react';

import PawflixDetails from './pawflix-details';

describe('PawflixDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PawflixDetails />);
    expect(baseElement).toBeTruthy();
  });
});
