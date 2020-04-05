import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'dribbble';

export const addDribbble = (parser: SocialLinkParser) =>
  parser.register(['dribbble.com', 'www.dribbble.com'], ({ pathnameParts }) => {
    const [user] = pathnameParts;
    if (user) {
      return {
        service,
        type: 'user',
        user,
        url: `https://dribbble.com/${user}`,
      };
    }
    return null;
  });

export const addDribbbleBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://dribbble.com/${user}`);
