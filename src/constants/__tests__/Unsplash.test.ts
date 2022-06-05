import {getRandomImageUnsplash} from '../unsplash';

test('Should return a correct url to the unsplash image', () => {
  const image = getRandomImageUnsplash(100);

  expect(image).toBe('https://source.unsplash.com/random/100x100');
});
