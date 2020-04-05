import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

const service = 'tumblr';

const domainSuffix = '.tumblr.com';

export const addTumblr = (parser: SocialLinkParser) =>
  parser.register(
    [(hostname) => hostname.endsWith(domainSuffix)],
    ({ hostname }) => {
      const user = hostname.substring(0, hostname.length - domainSuffix.length);
      if (user) {
        return {
          service,
          type: 'user',
          user,
          url: `https://${user}.tumblr.com/`,
        };
      }
      return null;
    }
  );

export const addTumblrBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://${user}.tumblr.com/`);
