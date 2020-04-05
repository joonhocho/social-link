import { addTikTok, addTikTokBuilder } from './tiktok';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('tiktok', () => {
  const parser = new SocialLinkParser();
  addTikTok(parser);

  const builder = new SocialLinkBuilder();
  addTikTokBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://tiktok.com/@${user}`)).toEqual({
    service: 'tiktok',
    type: 'user',
    url: `https://www.tiktok.com/@${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.tiktok.com/@${user}`)!)
  ).toEqual(`https://www.tiktok.com/@${user}`);
});
