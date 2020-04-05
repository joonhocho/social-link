import { SocialLinkParser } from '_src/social-link';

const service = 'pinterest';

export const addPinterest = (parser: SocialLinkParser) =>
  parser.register(
    ['pinterest.com', 'www.pinterest.com'],
    ({ pathnameParts }) => {
      const [username] = pathnameParts;
      if (username) {
        return {
          service,
          type: 'user',
          username,
          url: `https://www.pinterest.com/${username}/`,
        };
      }
      return null;
    }
  );
