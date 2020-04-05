import { SocialLinkParser } from '_src/social-link';

const service = 'messenger';

export const addMessenger = (parser: SocialLinkParser) => {
  parser.register(['m.me'], ({ pathnameParts }) => {
    const [username] = pathnameParts;
    if (username) {
      return {
        service,
        type: 'user',
        username,
        url: `https://www.messenger.com/t/${username}`,
      };
    }
    return null;
  });

  parser.register(
    ['messenger.com', 'www.messenger.com'],
    ({ pathnameParts }) => {
      const [p0, username] = pathnameParts;
      if (p0.toLowerCase() === 't' && username) {
        return {
          service,
          type: 'user',
          username,
          url: `https://www.messenger.com/t/${username}`,
        };
      }
      return null;
    }
  );
};
