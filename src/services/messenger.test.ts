import { addMessenger } from './messenger';
import { SocialLinkParser } from '_src/social-link';

test('messenger', () => {
  const parser = new SocialLinkParser();
  addMessenger(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://messenger.com/t/${username}`)).toEqual({
    service: 'messenger',
    type: 'user',
    url: `https://www.messenger.com/t/${username}`,
    username,
  });

  expect(parser.parse(`https://m.me/${username}`)).toEqual({
    service: 'messenger',
    type: 'user',
    url: `https://www.messenger.com/t/${username}`,
    username,
  });
});
