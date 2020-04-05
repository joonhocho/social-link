import { addQuora } from './quora';
import { SocialLinkParser } from '_src/social-link';

test('quora', () => {
  const parser = new SocialLinkParser();
  addQuora(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://quora.com/profile/${username}`)).toEqual({
    service: 'quora',
    type: 'user',
    url: `https://www.quora.com/profile/${username}`,
    username,
  });
});
