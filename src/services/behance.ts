import { SocialLinkParser } from '_src/social-link';

const service = 'behance';

export const addBehance = (parser: SocialLinkParser) =>
  parser.register(
    ['behance.com', 'behance.net', 'www.behance.net'],
    ({ pathnameParts }) => {
      const [username] = pathnameParts;
      if (username) {
        return {
          service,
          type: 'user',
          username,
          url: `https://www.behance.net/${username}`,
        };
      }
      return null;
    }
  );
