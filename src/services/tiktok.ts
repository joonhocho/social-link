import { SocialLinkParser } from '_src/social-link';

const service = 'tiktok';

export const addTikTok = (parser: SocialLinkParser) =>
  parser.register(['tiktok.com', 'www.tiktok.com'], ({ pathnameParts }) => {
    const [p0] = pathnameParts;
    if (p0 && p0.length > 1 && p0[0] === '@') {
      const username = p0.substring(1);
      return {
        service,
        type: 'user',
        username,
        url: `https://www.tiktok.com/@${username}`,
      };
    }
    return null;
  });
