import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'patreon';

export const addPatreon = (parser: SocialLinkParser) =>
  parser.register(['patreon.com', 'www.patreon.com'], ({ pathnameParts }) => {
    const [user] = pathnameParts;
    if (user) {
      return {
        service,
        type: 'user',
        user,
        url: `https://www.patreon.com/${user}`,
      };
    }
    return null;
  });

export const addPatreonBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://www.patreon.com/${user}`);
