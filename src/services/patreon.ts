import { SocialLinkParser } from '_src/social-link';

const service = 'patreon';

export const addPatreon = (parser: SocialLinkParser) =>
  parser.register(['patreon.com', 'www.patreon.com'], ({ pathnameParts }) => {
    const [username] = pathnameParts;
    if (username) {
      return {
        service,
        type: 'user',
        username,
        url: `https://www.patreon.com/${username}`,
      };
    }
    return null;
  });
