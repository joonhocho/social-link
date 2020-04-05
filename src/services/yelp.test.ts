import { addYelp, addYelpBuilder } from './yelp';
import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

test('yelp', () => {
  const parser = new SocialLinkParser();
  addYelp(parser);

  const builder = new SocialLinkBuilder();
  addYelpBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://yelp.com/biz/${user}`)).toEqual({
    service: 'yelp',
    type: 'business',
    url: `https://www.yelp.com/biz/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.yelp.com/biz/${user}`)!)
  ).toEqual(`https://www.yelp.com/biz/${user}`);

  expect(parser.parse(`https://yelp.com/user_details?userid=${user}`)).toEqual({
    service: 'yelp',
    type: 'user',
    url: `https://www.yelp.com/user_details?userid=${user}`,
    user,
  });

  expect(
    builder.build(
      parser.parse(`https://www.yelp.com/user_details?userid=${user}`)!
    )
  ).toEqual(`https://www.yelp.com/user_details?userid=${user}`);
});
