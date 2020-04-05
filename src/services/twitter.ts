import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'twitter';

export const addTwitter = (parser: SocialLinkParser) =>
  parser.register(['twitter.com', 'www.twitter.com'], ({ pathnameParts }) => {
    const [user] = pathnameParts;
    if (user) {
      return {
        service,
        type: 'user',
        user,
        url: `https://twitter.com/${user}`,
      };
    }
    return null;
  });

export const addTwitterBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://twitter.com/${user}`);
