import { addYelp } from './yelp';
import { SocialLinkParser } from '_src/social-link';

test('yelp', () => {
  const parser = new SocialLinkParser();
  addYelp(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://yelp.com/biz/${username}`)).toEqual({
    service: 'yelp',
    type: 'business',
    url: `https://www.yelp.com/biz/${username}`,
    username,
  });

  expect(
    parser.parse(`https://yelp.com/user_details?userid=${username}`)
  ).toEqual({
    service: 'yelp',
    type: 'user',
    url: `https://www.yelp.com/user_details?userid=${username}`,
    userId: username,
  });
});
