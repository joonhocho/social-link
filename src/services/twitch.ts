import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'twitch';

export const addTwitch = (parser: SocialLinkParser) =>
  parser.register(
    ['twitch.tv', 'www.twitch.tv', 'twitch.com', 'www.twitch.com'],
    ({ pathnameParts }) => {
      const [user] = pathnameParts;
      if (user) {
        return {
          service,
          type: 'user',
          user,
          url: `https://www.twitch.tv/${user}`,
        };
      }
      return null;
    }
  );

export const addTwitchBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://www.twitch.tv/${user}`);
