import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'youtube';

export const addYouTube = (parser: SocialLinkParser) =>
  parser.register(['youtube.com', 'www.youtube.com'], ({ pathnameParts }) => {
    const [p0, user] = pathnameParts;
    switch (p0.toLowerCase()) {
      case 'channel': {
        if (user) {
          return {
            service,
            type: 'channel',
            user,
            url: `https://www.youtube.com/channel/${user}`,
          };
        }
        break;
      }
      case 'user': {
        if (user) {
          return {
            service,
            type: 'user',
            user,
            url: `https://www.youtube.com/user/${user}`,
          };
        }
        break;
      }
    }
    return null;
  });

export const addYouTubeBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ type, user }) => {
    switch (type) {
      case 'user':
        return `https://www.youtube.com/user/${user}`;
      default:
        return `https://www.youtube.com/channel/${user}`;
    }
  });
