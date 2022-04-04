import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Image from '../image';

const IMG_FALLBACK = '/Slices/placeholder_for_missing_posters.png';

describe('Image', () => {
  test('Loads fallback image when image url is incorrect', async () => {
    render(<Image src="invalid-url.png" alt="invalid image" />);
    const image = screen.getByRole('img');
    fireEvent.error(image);
    expect(image).toHaveAttribute('src', IMG_FALLBACK);
  });

  test('Loads image when image url is correct', async () => {
    render(<Image src="valid-url.png" alt="valid image" />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/Slices/valid-url.png');
  });
});
