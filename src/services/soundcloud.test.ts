import { addSoundCloud } from './soundcloud';
import { SocialLinkParser } from '_src/social-link';

test('soundcloud', () => {
  const parser = new SocialLinkParser();
  addSoundCloud(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://soundcloud.com/${username}`)).toEqual({
    service: 'soundcloud',
    type: 'user',
    url: `https://soundcloud.com/${username}`,
    username,
  });
});
