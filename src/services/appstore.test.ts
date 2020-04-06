import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addAppStore, addAppStoreBuilder } from './appstore';

test('appstore', () => {
  const parser = new SocialLinkParser();
  addAppStore(parser);

  const builder = new SocialLinkBuilder();
  addAppStoreBuilder(builder);

  const region = 'ReGiOn';
  const user = 'uSeRnAmE';
  const name = 'nAmE';

  expect(
    parser.parse(`https://apps.apple.com/${region}/app/${name}/${user}`)
  ).toEqual({
    service: 'appstore',
    type: 'app',
    url: `https://apps.apple.com/${region.toLowerCase()}/app/${name}/${user}`,
    user,
    params: {
      region: region.toLowerCase(),
      name,
    },
  });

  expect(
    builder.build(
      parser.parse(`https://apps.apple.com/${region}/app/${name}/${user}`)!
    )
  ).toEqual(
    `https://apps.apple.com/${region.toLowerCase()}/app/${name}/${user}`
  );

  expect(
    builder.build(parser.parse(`https://apps.apple.com/${region}/app/${user}`)!)
  ).toEqual(`https://apps.apple.com/${region.toLowerCase()}/app/${user}`);
});
