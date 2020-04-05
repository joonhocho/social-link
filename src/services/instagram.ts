import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

const service = 'instagram';

export const addInstagram = (parser: SocialLinkParser) =>
  parser.register(
    ['instagr.am', 'instagram.com', 'www.instagram.com'],
    ({ pathnameParts }) => {
      const [user] = pathnameParts;
      if (user) {
        return {
          service,
          type: 'user',
          user,
          url: `https://www.instagram.com/${user}/`,
        };
      }
      return null;
    }
  );

export const addInstagramBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://www.instagram.com/${user}/`);
