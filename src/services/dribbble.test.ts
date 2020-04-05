import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addDribbble, addDribbbleBuilder } from './dribbble';

test('dribbble', () => {
  const parser = new SocialLinkParser();
  addDribbble(parser);

  const builder = new SocialLinkBuilder();
  addDribbbleBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://dribbble.com/${user}`)).toEqual({
    service: 'dribbble',
    type: 'user',
    url: `https://dribbble.com/${user}`,
    user,
  });

  expect(builder.build(parser.parse(`https://dribbble.com/${user}`)!)).toEqual(
    `https://dribbble.com/${user}`
  );
});
