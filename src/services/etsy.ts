import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'etsy';

export const addEtsy = (parser: SocialLinkParser) =>
  parser.register(['etsy.com', 'www.etsy.com'], ({ pathnameParts }) => {
    const [p0, user] = pathnameParts;
    if (p0.toLowerCase() === 'shop' && user) {
      return {
        service,
        type: 'shop',
        user,
        url: `https://www.etsy.com/shop/${user}`,
      };
    }
    return null;
  });

export const addEtsyBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://www.etsy.com/shop/${user}`);
