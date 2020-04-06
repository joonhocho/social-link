import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addAppleMusic, addAppleMusicBuilder } from './applemusic';

test('applemusic', () => {
  const parser = new SocialLinkParser();
  addAppleMusic(parser);

  const builder = new SocialLinkBuilder();
  addAppleMusicBuilder(builder);

  const region = 'ReGiOn';
  const user = 'uSeRnAmE';
  const name = 'nAmE';

  expect(
    parser.parse(`https://music.apple.com/${region}/artist/${name}/${user}`)
  ).toEqual({
    service: 'applemusic',
    type: 'artist',
    url: `https://music.apple.com/${region.toLowerCase()}/artist/${name}/${user}`,
    user,
    params: {
      region: region.toLowerCase(),
      name,
    },
  });

  expect(
    builder.build(
      parser.parse(`https://music.apple.com/${region}/artist/${name}/${user}`)!
    )
  ).toEqual(
    `https://music.apple.com/${region.toLowerCase()}/artist/${name}/${user}`
  );
});
