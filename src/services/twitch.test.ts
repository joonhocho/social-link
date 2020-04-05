import { addTwitch, addTwitchBuilder } from './twitch';
import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

test('twitch', () => {
  const parser = new SocialLinkParser();
  addTwitch(parser);

  const builder = new SocialLinkBuilder();
  addTwitchBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://twitch.com/${user}`)).toEqual({
    service: 'twitch',
    type: 'user',
    url: `https://www.twitch.tv/${user}`,
    user,
  });

  expect(builder.build(parser.parse(`https://www.twitch.tv/${user}`)!)).toEqual(
    `https://www.twitch.tv/${user}`
  );
});
