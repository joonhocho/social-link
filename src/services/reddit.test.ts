import { addReddit } from './reddit';
import { SocialLinkParser } from '_src/social-link';

test('reddit', () => {
  const parser = new SocialLinkParser();
  addReddit(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://reddit.com/u/${username}`)).toEqual({
    service: 'reddit',
    type: 'user',
    url: `https://www.reddit.com/user/${username}/`,
    username,
  });

  expect(parser.parse(`https://reddit.com/user/${username}`)).toEqual({
    service: 'reddit',
    type: 'user',
    url: `https://www.reddit.com/user/${username}/`,
    username,
  });

  expect(parser.parse(`https://reddit.com/r/${username}`)).toEqual({
    service: 'reddit',
    type: 'subreddit',
    url: `https://www.reddit.com/r/${username}/`,
    username,
  });
});
