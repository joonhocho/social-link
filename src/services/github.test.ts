import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addGitHub, addGitHubBuilder } from './github';

test('github', () => {
  const parser = new SocialLinkParser();
  addGitHub(parser);

  const builder = new SocialLinkBuilder();
  addGitHubBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://github.com/${user}`)).toEqual({
    service: 'github',
    type: 'user',
    url: `https://github.com/${user}`,
    user,
  });

  expect(builder.build(parser.parse(`https://github.com/${user}`)!)).toEqual(
    `https://github.com/${user}`
  );
});
