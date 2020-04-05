import { SocialLinkParser } from '_src/social-link';

const service = 'github';

export const addGitHub = (parser: SocialLinkParser) =>
  parser.register(['github.com', 'www.github.com'], ({ pathnameParts }) => {
    const [username] = pathnameParts;
    if (username) {
      return {
        service,
        type: 'user',
        username,
        url: `https://github.com/${username}`,
      };
    }
    return null;
  });
