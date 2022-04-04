import {
  render, screen,
} from '@testing-library/react';
import MovieCard from '../movie-card';

describe('MovieCard', () => {
  test('Shows movie card with image and caption', async () => {
    const imageUrl = 'image_url.png';
    const title = 'Test Image';
    render(<MovieCard thumbnail={imageUrl} title={title} />);

    const image = screen.getByRole('img');
    const figure = screen.getByRole('figure');

    expect(image).toHaveAttribute('src', `/Slices/${imageUrl}`);
    expect(figure).toHaveTextContent(title);
  });
});
