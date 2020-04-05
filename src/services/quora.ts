import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'quora';

export const addQuora = (parser: SocialLinkParser) =>
  parser.register(['quora.com', 'www.quora.com'], ({ pathnameParts }) => {
    const [p0, user] = pathnameParts;
    if (p0.toLowerCase() === 'profile' && user) {
      return {
        service,
        type: 'user',
        user,
        url: `https://www.quora.com/profile/${user}`,
      };
    }
    return null;
  });

export const addQuoraBuilder = (builder: SocialLinkBuilder) =>
  builder.register(
    service,
    ({ user }) => `https://www.quora.com/profile/${user}`
  );
