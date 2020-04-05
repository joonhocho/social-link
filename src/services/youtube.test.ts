import { addYouTube, addYouTubeBuilder } from './youtube';
import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

test('youtube', () => {
  const parser = new SocialLinkParser();
  addYouTube(parser);

  const builder = new SocialLinkBuilder();
  addYouTubeBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://youtube.com/channel/${user}`)).toEqual({
    service: 'youtube',
    type: 'channel',
    url: `https://www.youtube.com/channel/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.youtube.com/channel/${user}`)!)
  ).toEqual(`https://www.youtube.com/channel/${user}`);

  expect(parser.parse(`https://youtube.com/user/${user}`)).toEqual({
    service: 'youtube',
    type: 'user',
    url: `https://www.youtube.com/user/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.youtube.com/user/${user}`)!)
  ).toEqual(`https://www.youtube.com/user/${user}`);
});
