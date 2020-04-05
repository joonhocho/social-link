import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

const service = 'messenger';

export const addMessenger = (parser: SocialLinkParser) => {
  parser.register(['m.me'], ({ pathnameParts }) => {
    const [user] = pathnameParts;
    if (user) {
      return {
        service,
        type: 'user',
        user,
        url: `https://www.messenger.com/t/${user}`,
      };
    }
    return null;
  });

  parser.register(
    ['messenger.com', 'www.messenger.com'],
    ({ pathnameParts }) => {
      const [p0, user] = pathnameParts;
      if (p0.toLowerCase() === 't' && user) {
        return {
          service,
          type: 'user',
          user,
          url: `https://www.messenger.com/t/${user}`,
        };
      }
      return null;
    }
  );
};

export const addMessengerBuilder = (builder: SocialLinkBuilder) =>
  builder.register(
    service,
    ({ user }) => `https://www.messenger.com/t/${user}`
  );
