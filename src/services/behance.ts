import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'behance';

export const addBehance = (parser: SocialLinkParser) =>
  parser.register(
    ['behance.com', 'behance.net', 'www.behance.net'],
    ({ pathnameParts }) => {
      const [user] = pathnameParts;
      if (user) {
        return {
          service,
          type: 'user',
          user,
          url: `https://www.behance.net/${user}`,
        };
      }
      return null;
    }
  );

export const addBehanceBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://www.behance.net/${user}`);
