import { SocialLinkParser } from '_src/social-link';

const service = 'dribbble';

export const addDribbble = (parser: SocialLinkParser) =>
  parser.register(['dribbble.com', 'www.dribbble.com'], ({ pathnameParts }) => {
    const [username] = pathnameParts;
    if (username) {
      return {
        service,
        type: 'user',
        username,
        url: `https://dribbble.com/${username}`,
      };
    }
    return null;
  });
