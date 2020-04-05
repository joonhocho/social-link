import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'facebook';

export const addFacebook = (parser: SocialLinkParser) =>
  parser.register(
    ['fb.me', 'fb.com', 'facebook.com', 'www.facebook.com'],
    ({ pathnameParts }) => {
      const [p0, p1] = pathnameParts;
      switch (p0.toLowerCase()) {
        case 'groups': {
          const user = p1;
          return {
            service,
            type: 'group',
            user,
            url: `https://www.facebook.com/groups/${user}`,
          };
        }
        case 'pages': {
          const user = p1;
          return {
            service,
            type: 'page',
            user,
            url: `https://www.facebook.com/pages/${user}`,
          };
        }
        case 'gaming': {
          const user = p1;
          return {
            service,
            type: 'gaming',
            user,
            url: `https://www.facebook.com/gaming/${user}`,
          };
        }
        default: {
          const user = p0;
          return {
            service,
            type: 'user',
            user,
            url: `https://www.facebook.com/${user}`,
          };
        }
      }
      return null;
    }
  );

export const addFacebookBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ type, user }) => {
    switch (type) {
      case 'group':
        return `https://www.facebook.com/groups/${user}`;
      case 'page':
        return `https://www.facebook.com/pages/${user}`;
      case 'gaming':
        return `https://www.facebook.com/gaming/${user}`;
      default:
        return `https://www.facebook.com/${user}`;
    }
  });
