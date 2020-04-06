import { addPayPal, addPayPalBuilder } from './paypal';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('paypal', () => {
  const parser = new SocialLinkParser();
  addPayPal(parser);

  const builder = new SocialLinkBuilder();
  addPayPalBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://paypal.me/${user}`)).toEqual({
    service: 'paypal',
    type: 'user',
    url: `https://paypal.me/${user}`,
    user,
  });

  expect(builder.build(parser.parse(`https://paypal.me/${user}`)!)).toEqual(
    `https://paypal.me/${user}`
  );
});
