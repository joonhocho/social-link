import { SocialLinkParser } from '_src/social-link';

const service = 'reddit';

export const addReddit = (parser: SocialLinkParser) =>
  parser.register(['reddit.com', 'www.reddit.com'], ({ pathnameParts }) => {
    const [p0, username] = pathnameParts;
    switch (p0.toLowerCase()) {
      case 'u':
      case 'user': {
        if (username) {
          return {
            service,
            type: 'user',
            username,
            url: `https://www.reddit.com/user/${username}/`,
          };
        }
        break;
      }
      case 'r': {
        if (username) {
          return {
            service,
            type: 'subreddit',
            username,
            url: `https://www.reddit.com/r/${username}/`,
          };
        }
        break;
      }
    }
    return null;
  });
