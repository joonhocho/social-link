import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

const service = 'medium';

export const addMedium = (parser: SocialLinkParser) =>
  parser.register(['medium.com', 'www.medium.com'], ({ pathnameParts }) => {
    const [p0] = pathnameParts;
    if (p0 && p0.length > 1 && p0[0] === '@') {
      const user = p0.substring(1);
      return {
        service,
        type: 'user',
        user,
        url: `https://medium.com/@${user}`,
      };
    }
    return null;
  });

export const addMediumBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://medium.com/@${user}`);
