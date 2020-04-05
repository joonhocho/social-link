import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addEtsy, addEtsyBuilder } from './etsy';

test('etsy', () => {
  const parser = new SocialLinkParser();
  addEtsy(parser);

  const builder = new SocialLinkBuilder();
  addEtsyBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://etsy.com/shop/${user}`)).toEqual({
    service: 'etsy',
    type: 'shop',
    url: `https://www.etsy.com/shop/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.etsy.com/shop/${user}`)!)
  ).toEqual(`https://www.etsy.com/shop/${user}`);
});
