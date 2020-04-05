import { addTwitter, addTwitterBuilder } from './twitter';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('twitter', () => {
  const parser = new SocialLinkParser();
  addTwitter(parser);

  const builder = new SocialLinkBuilder();
  addTwitterBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://twitter.com/${user}`)).toEqual({
    service: 'twitter',
    type: 'user',
    url: `https://twitter.com/${user}`,
    user,
  });

  expect(builder.build(parser.parse(`https://twitter.com/${user}`)!)).toEqual(
    `https://twitter.com/${user}`
  );
});
