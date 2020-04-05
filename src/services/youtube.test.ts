import { addYouTube } from './youtube';
import { SocialLinkParser } from '_src/social-link';

test('youtube', () => {
  const parser = new SocialLinkParser();
  addYouTube(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://youtube.com/channel/${username}`)).toEqual({
    service: 'youtube',
    type: 'channel',
    url: `https://www.youtube.com/channel/${username}`,
    userId: username,
  });

  expect(parser.parse(`https://youtube.com/user/${username}`)).toEqual({
    service: 'youtube',
    type: 'user',
    url: `https://www.youtube.com/user/${username}`,
    username,
  });
});
