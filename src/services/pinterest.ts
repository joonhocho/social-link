import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'pinterest';

export const addPinterest = (parser: SocialLinkParser) =>
  parser.register(
    ['pinterest.com', 'www.pinterest.com'],
    ({ pathnameParts }) => {
      const [user] = pathnameParts;
      if (user) {
        return {
          service,
          type: 'user',
          user,
          url: `https://www.pinterest.com/${user}/`,
        };
      }
      return null;
    }
  );

export const addPinterestBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://www.pinterest.com/${user}/`);
