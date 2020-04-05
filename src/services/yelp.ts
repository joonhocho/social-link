import { SocialLinkParser } from '_src/social-link';

const service = 'yelp';

export const addYelp = (parser: SocialLinkParser) =>
  parser.register(['yelp.com', 'www.yelp.com'], (url) => {
    const [p0, username] = url.pathnameParts;
    switch (p0.toLowerCase()) {
      case 'biz': {
        if (username) {
          return {
            service,
            type: 'business',
            username,
            url: `https://www.yelp.com/biz/${username}`,
          };
        }
        break;
      }
      case 'user_details': {
        const userId = url.searchParams.userid;
        if (userId) {
          return {
            service,
            type: 'user',
            userId,
            url: `https://www.yelp.com/user_details?userid=${userId}`,
          };
        }
        break;
      }
    }
    return null;
  });
