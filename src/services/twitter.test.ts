import { addTwitter } from './twitter';
import { SocialLinkParser } from '_src/social-link';

test('twitter', () => {
  const parser = new SocialLinkParser();
  addTwitter(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://twitter.com/${username}`)).toEqual({
    service: 'twitter',
    type: 'user',
    url: `https://twitter.com/${username}`,
    username,
  });
});
