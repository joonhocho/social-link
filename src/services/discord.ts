import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'discord';

// https://discord.gg/discord-developers
// https://www.discord.gg/ninja
// https://discordapp.com/invite/ninja

export const addDiscord = (parser: SocialLinkParser) =>
  parser.register(
    [
      'discord.gg',
      'www.discord.gg',
      'discord.com',
      'www.discord.com',
      'discordapp.com',
      'www.discordapp.com',
    ],
    ({ pathnameParts }) => {
      const [p0, p1] = pathnameParts;
      switch (p0.toLowerCase()) {
        case 'invite': {
          const user = p1;
          if (user) {
            return {
              service,
              type: 'invite',
              user,
              url: `https://discordapp.com/invite/${user}`,
            };
          }
          break;
        }
        default: {
          const user = p0;
          if (user) {
            return {
              service,
              type: 'server',
              user,
              url: `https://discord.gg/${user}`,
            };
          }
        }
      }
      return null;
    }
  );

export const addDiscordBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ type, user }) => {
    switch (type) {
      case 'invite':
        return `https://discordapp.com/invite/${user}`;
      default:
        return `https://discord.gg/${user}`;
    }
  });
