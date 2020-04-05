import { addTumblr } from './tumblr';
import { SocialLinkParser } from '_src/social-link';

test('tumblr', () => {
  const parser = new SocialLinkParser();
  addTumblr(parser);

  const username = 'uSeRnAm';

  expect(parser.parse(`https://${username}.tumblr.com`)).toEqual({
    service: 'tumblr',
    type: 'user',
    url: `https://${username.toLowerCase()}.tumblr.com/`,
    username: username.toLowerCase(),
  });
});
