const {
  toBeInTheDocument,
} = require('@testing-library/jest-dom/dist/matchers');
const {
  render,
  getByRole,
  screen,
  getByText,
} = require('@testing-library/react');
const { default: Main } = require('./Main');

test('Should render the pokemon card', async () => {
  render(<Main />);

  const img = screen.getByClassName('pokemonImg');
  expect(img).toBeInTheDocument();
});
