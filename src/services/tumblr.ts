import { SocialLinkParser } from '_src/social-link';

const service = 'tumblr';

const domainSuffix = '.tumblr.com';

export const addTumblr = (parser: SocialLinkParser) =>
  parser.register(
    [(hostname) => hostname.endsWith(domainSuffix)],
    ({ hostname }) => {
      const username = hostname.substring(
        0,
        hostname.length - domainSuffix.length
      );
      if (username) {
        return {
          service,
          type: 'user',
          username,
          url: `https://${username}.tumblr.com/`,
        };
      }
      return null;
    }
  );
