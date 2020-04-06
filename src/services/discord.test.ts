import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addDiscord, addDiscordBuilder } from './discord';

test('discord', () => {
  const parser = new SocialLinkParser();
  addDiscord(parser);

  const builder = new SocialLinkBuilder();
  addDiscordBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://discord.com/${user}`)).toEqual({
    service: 'discord',
    type: 'server',
    url: `https://discord.gg/${user}`,
    user,
  });

  expect(builder.build(parser.parse(`https://discord.gg/${user}`)!)).toEqual(
    `https://discord.gg/${user}`
  );

  expect(parser.parse(`https://discord.com/invite/${user}`)).toEqual({
    service: 'discord',
    type: 'invite',
    url: `https://discordapp.com/invite/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://discordapp.com/invite/${user}`)!)
  ).toEqual(`https://discordapp.com/invite/${user}`);
});
