import { SocialLinkParser } from '_src/social-link';

const service = 'medium';

export const addMedium = (parser: SocialLinkParser) =>
  parser.register(['medium.com', 'www.medium.com'], ({ pathnameParts }) => {
    const [p0] = pathnameParts;
    if (p0 && p0.length > 1 && p0[0] === '@') {
      const username = p0.substring(1);
      return {
        service,
        type: 'user',
        username,
        url: `https://medium.com/@${username}`,
      };
    }
    return null;
  });
