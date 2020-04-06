import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'talksub';

export const addTalksub = (parser: SocialLinkParser) =>
  parser.register(['talksub.com', 'www.talksub.com'], ({ pathnameParts }) => {
    const [p0, user] = pathnameParts;
    if (p0.toLowerCase() === 'user' && user) {
      return {
        service,
        type: 'user',
        user,
        url: `https://talksub.com/user/${user}`,
      };
    }
    return null;
  });

export const addTalksubBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://talksub.com/user/${user}`);
