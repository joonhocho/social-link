import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'googleplay';

// https://play.google.com/store/apps/details?id=com.whatsapp
// https://play.google.com/store/apps/developer?id=WhatsApp+Inc.

export const addGooglePlay = (parser: SocialLinkParser) =>
  parser.register(['play.google.com'], (url) => {
    const [store, apps, type] = url.pathnameParts;
    if (store.toLowerCase() === 'store' && apps.toLowerCase() === 'apps') {
      const typeL = type.toLowerCase();
      const user = url.searchParams.id;
      if (user) {
        if (typeL === 'details') {
          return {
            service,
            type: 'app',
            user,
            url: `https://play.google.com/store/apps/details?id=${user}`,
          };
        }
        if (typeL === 'developer') {
          return {
            service,
            type: 'developer',
            user,
            url: `https://play.google.com/store/apps/developer?id=${encodeURIComponent(
              user
            )}`,
          };
        }
      }
    }
    return null;
  });

export const addGooglePlayBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ type, user }) => {
    switch (type) {
      case 'developer':
        return `https://play.google.com/store/apps/developer?id=${encodeURIComponent(
          user
        )}`;
      default:
        return `https://play.google.com/store/apps/details?id=${user}`;
    }
  });
