import { addMedium } from './medium';
import { SocialLinkParser } from '_src/social-link';

test('medium', () => {
  const parser = new SocialLinkParser();
  addMedium(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://medium.com/@${username}`)).toEqual({
    service: 'medium',
    type: 'user',
    url: `https://medium.com/@${username}`,
    username,
  });
});
