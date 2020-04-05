import { SocialLinkParser } from '_src/social-link';

const service = 'snapchat';

export const addSnapchat = (parser: SocialLinkParser) =>
  parser.register(['snapchat.com', 'www.snapchat.com'], ({ pathnameParts }) => {
    const [p0, username] = pathnameParts;
    if (p0.toLowerCase() === 'add' && username) {
      return {
        service,
        type: 'user',
        username,
        url: `https://www.snapchat.com/add/${username}`,
      };
    }
    return null;
  });
