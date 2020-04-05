import { addInstagram } from './instagram';
import { SocialLinkParser } from '_src/social-link';

test('instagram', () => {
  const parser = new SocialLinkParser();
  addInstagram(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://instagram.com/${username}`)).toEqual({
    service: 'instagram',
    type: 'user',
    url: `https://www.instagram.com/${username}/`,
    username,
  });
});
