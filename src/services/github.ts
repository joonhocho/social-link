import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'github';

export const addGitHub = (parser: SocialLinkParser) =>
  parser.register(['github.com', 'www.github.com'], ({ pathnameParts }) => {
    const [user] = pathnameParts;
    if (user) {
      return {
        service,
        type: 'user',
        user,
        url: `https://github.com/${user}`,
      };
    }
    return null;
  });

export const addGitHubBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://github.com/${user}`);
