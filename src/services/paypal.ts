import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'paypal';

// https://paypal.me/${user}

export const addPayPal = (parser: SocialLinkParser) =>
  parser.register(
    ['paypal.me', 'www.paypal.me', 'paypal.com', 'www.paypal.com'],
    ({ pathnameParts }) => {
      const [user] = pathnameParts;
      if (user) {
        return {
          service,
          type: 'user',
          user,
          url: `https://paypal.me/${user}`,
        };
      }
      return null;
    }
  );

export const addPayPalBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://paypal.me/${user}`);
