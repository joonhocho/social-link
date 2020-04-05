import { addEtsy } from './etsy';
import { SocialLinkParser } from '_src/social-link';

test('etsy', () => {
  const parser = new SocialLinkParser();
  addEtsy(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://etsy.com/shop/${username}`)).toEqual({
    service: 'etsy',
    type: 'shop',
    url: `https://www.etsy.com/shop/${username}`,
    username,
  });
});
