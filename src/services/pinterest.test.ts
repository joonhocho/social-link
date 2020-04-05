import { addPinterest, addPinterestBuilder } from './pinterest';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('pinterest', () => {
  const parser = new SocialLinkParser();
  addPinterest(parser);

  const builder = new SocialLinkBuilder();
  addPinterestBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://pinterest.com/${user}`)).toEqual({
    service: 'pinterest',
    type: 'user',
    url: `https://www.pinterest.com/${user}/`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.pinterest.com/${user}/`)!)
  ).toEqual(`https://www.pinterest.com/${user}/`);
});
