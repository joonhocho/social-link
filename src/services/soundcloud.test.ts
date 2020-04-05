import { addSoundCloud, addSoundCloudBuilder } from './soundcloud';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('soundcloud', () => {
  const parser = new SocialLinkParser();
  addSoundCloud(parser);

  const builder = new SocialLinkBuilder();
  addSoundCloudBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://soundcloud.com/${user}`)).toEqual({
    service: 'soundcloud',
    type: 'user',
    url: `https://soundcloud.com/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://soundcloud.com/${user}`)!)
  ).toEqual(`https://soundcloud.com/${user}`);
});
