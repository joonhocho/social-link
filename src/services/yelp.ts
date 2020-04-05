import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'yelp';

export const addYelp = (parser: SocialLinkParser) =>
  parser.register(['yelp.com', 'www.yelp.com'], (url) => {
    const { pathnameParts } = url;
    const [p0] = pathnameParts;
    switch (p0.toLowerCase()) {
      case 'biz': {
        const user = pathnameParts[1];
        if (user) {
          return {
            service,
            type: 'business',
            user,
            url: `https://www.yelp.com/biz/${user}`,
          };
        }
        break;
      }
      case 'user_details': {
        const user = url.searchParams.userid;
        if (user) {
          return {
            service,
            type: 'user',
            user,
            url: `https://www.yelp.com/user_details?userid=${user}`,
          };
        }
        break;
      }
    }
    return null;
  });

export const addYelpBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ type, user }) => {
    switch (type) {
      case 'user':
        return `https://www.yelp.com/user_details?userid=${user}`;
      default:
        return `https://www.yelp.com/biz/${user}`;
    }
  });
