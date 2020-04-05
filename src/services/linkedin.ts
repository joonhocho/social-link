import { SocialLinkParser } from '_src/social-link';

const service = 'linkedin';

export const addLinkedIn = (parser: SocialLinkParser) =>
  parser.register(['linkedin.com', 'www.linkedin.com'], ({ pathnameParts }) => {
    const [p0, username] = pathnameParts;
    switch (p0.toLowerCase()) {
      case 'in': {
        if (username) {
          return {
            service,
            type: 'user',
            username,
            url: `https://www.linkedin.com/in/${username}/`,
          };
        }
        break;
      }
      case 'company': {
        if (username) {
          return {
            service,
            type: 'company',
            username,
            url: `https://www.linkedin.com/company/${username}/`,
          };
        }
        break;
      }
    }
    return null;
  });
