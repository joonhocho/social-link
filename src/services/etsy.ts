import { SocialLinkParser } from '_src/social-link';

const service = 'etsy';

export const addEtsy = (parser: SocialLinkParser) =>
  parser.register(['etsy.com', 'www.etsy.com'], ({ pathnameParts }) => {
    const [p0, username] = pathnameParts;
    if (p0.toLowerCase() === 'shop' && username) {
      return {
        service,
        type: 'shop',
        username,
        url: `https://www.etsy.com/shop/${username}`,
      };
    }
    return null;
  });
