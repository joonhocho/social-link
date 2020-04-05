import { SocialLinkParser } from '_src/social-link';

const service = 'youtube';

export const addYouTube = (parser: SocialLinkParser) =>
  parser.register(['youtube.com', 'www.youtube.com'], ({ pathnameParts }) => {
    const [p0, username] = pathnameParts;
    switch (p0.toLowerCase()) {
      case 'channel': {
        if (username) {
          return {
            service,
            type: 'channel',
            userId: username,
            url: `https://www.youtube.com/channel/${username}`,
          };
        }
        break;
      }
      case 'user': {
        if (username) {
          return {
            service,
            type: 'user',
            username,
            url: `https://www.youtube.com/user/${username}`,
          };
        }
        break;
      }
    }
    return null;
  });
