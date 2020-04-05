import { addSnapchat } from './snapchat';
import { SocialLinkParser } from '_src/social-link';

test('snapchat', () => {
  const parser = new SocialLinkParser();
  addSnapchat(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://snapchat.com/add/${username}`)).toEqual({
    service: 'snapchat',
    type: 'user',
    url: `https://www.snapchat.com/add/${username}`,
    username,
  });
});
