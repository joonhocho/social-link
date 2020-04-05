import { addTikTok } from './tiktok';
import { SocialLinkParser } from '_src/social-link';

test('tiktok', () => {
  const parser = new SocialLinkParser();
  addTikTok(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://tiktok.com/@${username}`)).toEqual({
    service: 'tiktok',
    type: 'user',
    url: `https://www.tiktok.com/@${username}`,
    username,
  });
});
