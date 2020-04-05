import { addDribbble } from './dribbble';
import { SocialLinkParser } from '_src/social-link';

test('dribbble', () => {
  const parser = new SocialLinkParser();
  addDribbble(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://dribbble.com/${username}`)).toEqual({
    service: 'dribbble',
    type: 'user',
    url: `https://dribbble.com/${username}`,
    username,
  });
});
