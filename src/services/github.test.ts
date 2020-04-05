import { addGitHub } from './github';
import { SocialLinkParser } from '_src/social-link';

test('github', () => {
  const parser = new SocialLinkParser();
  addGitHub(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://github.com/${username}`)).toEqual({
    service: 'github',
    type: 'user',
    url: `https://github.com/${username}`,
    username,
  });
});
