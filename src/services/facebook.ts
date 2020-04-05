import { SocialLinkParser } from '_src/social-link';

const service = 'facebook';

export const addFacebook = (parser: SocialLinkParser) =>
  parser.register(
    ['fb.me', 'fb.com', 'facebook.com', 'www.facebook.com'],
    ({ pathnameParts }) => {
      const [p0, p1] = pathnameParts;
      switch (p0.toLowerCase()) {
        case 'groups': {
          const username = p1;
          return {
            service,
            type: 'group',
            username,
            url: `https://www.facebook.com/groups/${username}`,
          };
        }
        case 'pages': {
          const username = p1;
          return {
            service,
            type: 'page',
            username,
            url: `https://www.facebook.com/pages/${username}`,
          };
        }
        case 'gaming': {
          const username = p1;
          return {
            service,
            type: 'gaming',
            username,
            url: `https://www.facebook.com/gaming/${username}`,
          };
        }
        default: {
          const username = p0;
          return {
            service,
            type: 'user',
            username,
            url: `https://www.facebook.com/${username}`,
          };
        }
      }
      return null;
    }
  );
