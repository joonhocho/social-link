import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addBehance, addBehanceBuilder } from './behance';

test('behance', () => {
  const parser = new SocialLinkParser();
  addBehance(parser);

  const builder = new SocialLinkBuilder();
  addBehanceBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://www.behance.net/${user}`)).toEqual({
    service: 'behance',
    type: 'user',
    url: `https://www.behance.net/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.behance.net/${user}`)!)
  ).toEqual(`https://www.behance.net/${user}`);

  expect(parser.parse(`//behance.com/${user}`)).toEqual({
    service: 'behance',
    type: 'user',
    url: `https://www.behance.net/${user}`,
    user,
  });
});
