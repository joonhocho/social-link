import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addSpotify, addSpotifyBuilder } from './spotify';

test('spotify', () => {
  const parser = new SocialLinkParser();
  addSpotify(parser);

  const builder = new SocialLinkBuilder();
  addSpotifyBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://spotify.com/artist/${user}`)).toEqual({
    service: 'spotify',
    type: 'artist',
    url: `https://open.spotify.com/artist/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://open.spotify.com/artist/${user}`)!)
  ).toEqual(`https://open.spotify.com/artist/${user}`);
});
