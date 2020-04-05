import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addInstagram, addInstagramBuilder } from './instagram';

test('instagram', () => {
  const parser = new SocialLinkParser();
  addInstagram(parser);

  const builder = new SocialLinkBuilder();
  addInstagramBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://instagram.com/${user}`)).toEqual({
    service: 'instagram',
    type: 'user',
    url: `https://www.instagram.com/${user}/`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.instagram.com/${user}/`)!)
  ).toEqual(`https://www.instagram.com/${user}/`);
});
