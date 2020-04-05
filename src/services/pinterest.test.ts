import { addPinterest } from './pinterest';
import { SocialLinkParser } from '_src/social-link';

test('pinterest', () => {
  const parser = new SocialLinkParser();
  addPinterest(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://pinterest.com/${username}`)).toEqual({
    service: 'pinterest',
    type: 'user',
    url: `https://www.pinterest.com/${username}/`,
    username,
  });
});
