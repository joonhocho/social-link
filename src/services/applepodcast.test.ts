import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addApplePodcast, addApplePodcastBuilder } from './applepodcast';

test('applepodcast', () => {
  const parser = new SocialLinkParser();
  addApplePodcast(parser);

  const builder = new SocialLinkBuilder();
  addApplePodcastBuilder(builder);

  const region = 'ReGiOn';
  const user = 'uSeRnAmE';
  const name = 'nAmE';

  expect(
    parser.parse(`https://podcasts.apple.com/${region}/podcast/${name}/${user}`)
  ).toEqual({
    service: 'applepodcast',
    type: 'podcast',
    url: `https://podcasts.apple.com/${region.toLowerCase()}/podcast/${name}/${user}`,
    user,
    params: {
      region: region.toLowerCase(),
      name,
    },
  });

  expect(
    builder.build(
      parser.parse(
        `https://podcasts.apple.com/${region}/podcast/${name}/${user}`
      )!
    )
  ).toEqual(
    `https://podcasts.apple.com/${region.toLowerCase()}/podcast/${name}/${user}`
  );

  expect(
    builder.build(
      parser.parse(`https://podcasts.apple.com/${region}/podcast/${user}`)!
    )
  ).toEqual(
    `https://podcasts.apple.com/${region.toLowerCase()}/podcast/${user}`
  );
});
