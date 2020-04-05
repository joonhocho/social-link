import { addReddit, addRedditBuilder } from './reddit';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('reddit', () => {
  const parser = new SocialLinkParser();
  addReddit(parser);

  const builder = new SocialLinkBuilder();
  addRedditBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://reddit.com/u/${user}`)).toEqual({
    service: 'reddit',
    type: 'user',
    url: `https://www.reddit.com/user/${user}/`,
    user,
  });

  expect(parser.parse(`https://reddit.com/user/${user}`)).toEqual({
    service: 'reddit',
    type: 'user',
    url: `https://www.reddit.com/user/${user}/`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.reddit.com/user/${user}/`)!)
  ).toEqual(`https://www.reddit.com/user/${user}/`);

  expect(parser.parse(`https://reddit.com/r/${user}`)).toEqual({
    service: 'reddit',
    type: 'subreddit',
    url: `https://www.reddit.com/r/${user}/`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.reddit.com/r/${user}/`)!)
  ).toEqual(`https://www.reddit.com/r/${user}/`);
});
