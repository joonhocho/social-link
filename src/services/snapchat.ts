import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'snapchat';

export const addSnapchat = (parser: SocialLinkParser) =>
  parser.register(['snapchat.com', 'www.snapchat.com'], ({ pathnameParts }) => {
    const [p0, user] = pathnameParts;
    if (p0.toLowerCase() === 'add' && user) {
      return {
        service,
        type: 'user',
        user,
        url: `https://www.snapchat.com/add/${user}`,
      };
    }
    return null;
  });

export const addSnapchatBuilder = (builder: SocialLinkBuilder) =>
  builder.register(
    service,
    ({ user }) => `https://www.snapchat.com/add/${user}`
  );
