import { addBehance } from './behance';
import { SocialLinkParser } from '_src/social-link';

test('behance', () => {
  const parser = new SocialLinkParser();
  addBehance(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://www.behance.net/${username}`)).toEqual({
    service: 'behance',
    type: 'user',
    url: `https://www.behance.net/${username}`,
    username,
  });

  expect(parser.parse(`//behance.com/${username}`)).toEqual({
    service: 'behance',
    type: 'user',
    url: `https://www.behance.net/${username}`,
    username,
  });
});
