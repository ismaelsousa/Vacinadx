import {getRandomImageUnsplash} from '../unsplash';

it('should return a correct url to the unsplash image', () => {
  const size = 100;
  const url = getRandomImageUnsplash(size);
  expect(url).toBe(`https://source.unsplash.com/random/${size}x${size}`);
});
