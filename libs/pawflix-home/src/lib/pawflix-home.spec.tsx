import { render } from '@testing-library/react';

import PawflixHome from './pawflix-home';

describe('PawflixHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PawflixHome />);
    expect(baseElement).toBeTruthy();
  });
});
