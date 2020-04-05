import { SocialLinkParser } from '_src/social-link';

const service = 'twitch';

export const addTwitch = (parser: SocialLinkParser) =>
  parser.register(
    ['twitch.tv', 'www.twitch.tv', 'twitch.com', 'www.twitch.com'],
    ({ pathnameParts }) => {
      const [username] = pathnameParts;
      if (username) {
        return {
          service,
          type: 'user',
          username,
          url: `https://www.twitch.tv/${username}`,
        };
      }
      return null;
    }
  );
