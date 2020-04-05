import { addFacebook } from './facebook';
import { SocialLinkParser } from '_src/social-link';

test('facebook', () => {
  const parser = new SocialLinkParser();
  addFacebook(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://facebook.com/${username}`)).toEqual({
    service: 'facebook',
    type: 'user',
    url: `https://www.facebook.com/${username}`,
    username,
  });

  expect(parser.parse(`https://facebook.com/groups/${username}`)).toEqual({
    service: 'facebook',
    type: 'group',
    url: `https://www.facebook.com/groups/${username}`,
    username,
  });

  expect(parser.parse(`https://facebook.com/pages/${username}`)).toEqual({
    service: 'facebook',
    type: 'page',
    url: `https://www.facebook.com/pages/${username}`,
    username,
  });

  expect(parser.parse(`https://facebook.com/gaming/${username}`)).toEqual({
    service: 'facebook',
    type: 'gaming',
    url: `https://www.facebook.com/gaming/${username}`,
    username,
  });
});
