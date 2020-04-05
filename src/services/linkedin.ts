import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

const service = 'linkedin';

export const addLinkedIn = (parser: SocialLinkParser) =>
  parser.register(['linkedin.com', 'www.linkedin.com'], ({ pathnameParts }) => {
    const [p0, user] = pathnameParts;
    switch (p0.toLowerCase()) {
      case 'in': {
        if (user) {
          return {
            service,
            type: 'user',
            user,
            url: `https://www.linkedin.com/in/${user}/`,
          };
        }
        break;
      }
      case 'company': {
        if (user) {
          return {
            service,
            type: 'company',
            user,
            url: `https://www.linkedin.com/company/${user}/`,
          };
        }
        break;
      }
    }
    return null;
  });

export const addLinkedInBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ type, user }) => {
    switch (type) {
      case 'company':
        return `https://www.linkedin.com/company/${user}/`;
      default:
        return `https://www.linkedin.com/in/${user}/`;
    }
  });
