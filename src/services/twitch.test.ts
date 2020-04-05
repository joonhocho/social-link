import { addTwitch } from './twitch';
import { SocialLinkParser } from '_src/social-link';

test('twitch', () => {
  const parser = new SocialLinkParser();
  addTwitch(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://twitch.com/${username}`)).toEqual({
    service: 'twitch',
    type: 'user',
    url: `https://www.twitch.tv/${username}`,
    username,
  });
});
