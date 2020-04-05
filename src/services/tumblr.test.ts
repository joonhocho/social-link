import { addTumblr, addTumblrBuilder } from './tumblr';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('tumblr', () => {
  const parser = new SocialLinkParser();
  addTumblr(parser);

  const builder = new SocialLinkBuilder();
  addTumblrBuilder(builder);

  const user = 'uSeRnAm';

  expect(parser.parse(`https://${user}.tumblr.com`)).toEqual({
    service: 'tumblr',
    type: 'user',
    url: `https://${user.toLowerCase()}.tumblr.com/`,
    user: user.toLowerCase(),
  });

  expect(
    builder.build(parser.parse(`https://${user.toLowerCase()}.tumblr.com/`)!)
  ).toEqual(`https://${user.toLowerCase()}.tumblr.com/`);
});
