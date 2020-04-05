import { addPatreon } from './patreon';
import { SocialLinkParser } from '_src/social-link';

test('patreon', () => {
  const parser = new SocialLinkParser();
  addPatreon(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://patreon.com/${username}`)).toEqual({
    service: 'patreon',
    type: 'user',
    url: `https://www.patreon.com/${username}`,
    username,
  });
});
