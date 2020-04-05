import { SocialLinkParser } from '_src/social-link';

const service = 'instagram';

export const addInstagram = (parser: SocialLinkParser) =>
  parser.register(
    ['instagr.am', 'instagram.com', 'www.instagram.com'],
    ({ pathnameParts }) => {
      const [username] = pathnameParts;
      if (username) {
        return {
          service,
          type: 'user',
          username,
          url: `https://www.instagram.com/${username}/`,
        };
      }
      return null;
    }
  );
