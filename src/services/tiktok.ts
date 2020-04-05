import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'tiktok';

export const addTikTok = (parser: SocialLinkParser) =>
  parser.register(['tiktok.com', 'www.tiktok.com'], ({ pathnameParts }) => {
    const [p0] = pathnameParts;
    if (p0 && p0.length > 1 && p0[0] === '@') {
      const user = p0.substring(1);
      return {
        service,
        type: 'user',
        user,
        url: `https://www.tiktok.com/@${user}`,
      };
    }
    return null;
  });

export const addTikTokBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://www.tiktok.com/@${user}`);
