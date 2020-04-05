import { addFlickr } from './flickr';
import { SocialLinkParser } from '_src/social-link';

test('flickr', () => {
  const parser = new SocialLinkParser();
  addFlickr(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://flickr.com/photos/${username}`)).toEqual({
    service: 'flickr',
    type: 'user',
    url: `https://www.flickr.com/photos/${username}/`,
    username,
  });
});
