import { SocialLinkParser } from '_src/social-link';

const service = 'twitter';

export const addTwitter = (parser: SocialLinkParser) =>
  parser.register(['twitter.com', 'www.twitter.com'], ({ pathnameParts }) => {
    const [username] = pathnameParts;
    if (username) {
      return {
        service,
        type: 'user',
        username,
        url: `https://twitter.com/${username}`,
      };
    }
    return null;
  });
