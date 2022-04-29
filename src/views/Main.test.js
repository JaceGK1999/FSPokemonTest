import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

describe('Main', () => {
  it('Should render the pokemon cards based on type', async () => {
    render(<Main />);

    const load = screen.getByText('Loading...');
    expect(load).toBeInTheDocument();

    await waitFor(
      async () => {
        userEvent.selectOptions(screen.getByRole('combobox'), 'fighting');

        const name = await screen.findByLabelText('blaziken');
        expect(name).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
