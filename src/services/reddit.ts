import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'reddit';

export const addReddit = (parser: SocialLinkParser) =>
  parser.register(['reddit.com', 'www.reddit.com'], ({ pathnameParts }) => {
    const [p0, user] = pathnameParts;
    switch (p0.toLowerCase()) {
      case 'u':
      case 'user': {
        if (user) {
          return {
            service,
            type: 'user',
            user,
            url: `https://www.reddit.com/user/${user}/`,
          };
        }
        break;
      }
      case 'r': {
        if (user) {
          return {
            service,
            type: 'subreddit',
            user,
            url: `https://www.reddit.com/r/${user}/`,
          };
        }
        break;
      }
    }
    return null;
  });

export const addRedditBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ type, user }) => {
    switch (type) {
      case 'subreddit':
        return `https://www.reddit.com/r/${user}/`;
      default:
        return `https://www.reddit.com/user/${user}/`;
    }
  });
