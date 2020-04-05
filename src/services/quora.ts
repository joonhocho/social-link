import { SocialLinkParser } from '_src/social-link';

const service = 'quora';

export const addQuora = (parser: SocialLinkParser) =>
  parser.register(['quora.com', 'www.quora.com'], ({ pathnameParts }) => {
    const [p0, username] = pathnameParts;
    if (p0.toLowerCase() === 'profile' && username) {
      return {
        service,
        type: 'user',
        username,
        url: `https://www.quora.com/profile/${username}`,
      };
    }
    return null;
  });
