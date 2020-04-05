import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addFacebook, addFacebookBuilder } from './facebook';

test('facebook', () => {
  const parser = new SocialLinkParser();
  addFacebook(parser);

  const builder = new SocialLinkBuilder();
  addFacebookBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://facebook.com/${user}`)).toEqual({
    service: 'facebook',
    type: 'user',
    url: `https://www.facebook.com/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.facebook.com/${user}`)!)
  ).toEqual(`https://www.facebook.com/${user}`);

  expect(parser.parse(`https://facebook.com/groups/${user}`)).toEqual({
    service: 'facebook',
    type: 'group',
    url: `https://www.facebook.com/groups/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.facebook.com/groups/${user}`)!)
  ).toEqual(`https://www.facebook.com/groups/${user}`);

  expect(parser.parse(`https://facebook.com/pages/${user}`)).toEqual({
    service: 'facebook',
    type: 'page',
    url: `https://www.facebook.com/pages/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.facebook.com/pages/${user}`)!)
  ).toEqual(`https://www.facebook.com/pages/${user}`);

  expect(parser.parse(`https://facebook.com/gaming/${user}`)).toEqual({
    service: 'facebook',
    type: 'gaming',
    url: `https://www.facebook.com/gaming/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.facebook.com/gaming/${user}`)!)
  ).toEqual(`https://www.facebook.com/gaming/${user}`);
});
