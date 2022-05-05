import { render, screen, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Search by type', () => {
  it('should render a type search dropdown', async () => {
    render(<SearchBar />);

    screen.findByPlaceholderText('Search Pokemon Name');

    const test = screen.getByRole('button');

    expect(test).toBeInTheDocument();

    screen.debug();
  });
});
