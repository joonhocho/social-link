import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addMedium, addMediumBuilder } from './medium';

test('medium', () => {
  const parser = new SocialLinkParser();
  addMedium(parser);

  const builder = new SocialLinkBuilder();
  addMediumBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://medium.com/@${user}`)).toEqual({
    service: 'medium',
    type: 'user',
    url: `https://medium.com/@${user}`,
    user,
  });

  expect(builder.build(parser.parse(`https://medium.com/@${user}`)!)).toEqual(
    `https://medium.com/@${user}`
  );
});
