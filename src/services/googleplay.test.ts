import { addGooglePlay, addGooglePlayBuilder } from './googleplay';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('googleplay', () => {
  const parser = new SocialLinkParser();
  addGooglePlay(parser);

  const builder = new SocialLinkBuilder();
  addGooglePlayBuilder(builder);

  const user = 'uSeRnAmE';

  expect(
    parser.parse(`https://play.google.com/store/apps/details?id=${user}`)
  ).toEqual({
    service: 'googleplay',
    type: 'app',
    url: `https://play.google.com/store/apps/details?id=${user}`,
    user,
  });

  expect(
    parser.parse(`https://play.google.com/store/apps/details?id=${user}`)
  ).toEqual({
    service: 'googleplay',
    type: 'app',
    url: `https://play.google.com/store/apps/details?id=${user}`,
    user,
  });

  expect(
    parser.parse(`https://play.google.com/store/apps/developer?id=${user}`)
  ).toEqual({
    service: 'googleplay',
    type: 'developer',
    url: `https://play.google.com/store/apps/developer?id=${user}`,
    user,
  });

  expect(
    parser.parse(`https://play.google.com/store/apps/developer?id=${user}`)
  ).toEqual({
    service: 'googleplay',
    type: 'developer',
    url: `https://play.google.com/store/apps/developer?id=${user}`,
    user,
  });
});
