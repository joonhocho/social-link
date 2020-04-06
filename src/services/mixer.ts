import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'mixer';

export const addMixer = (parser: SocialLinkParser) =>
  parser.register(['mixer.com', 'www.mixer.com'], ({ pathnameParts }) => {
    const [user] = pathnameParts;
    if (user) {
      return {
        service,
        type: 'user',
        user,
        url: `https://mixer.com/${user}`,
      };
    }
    return null;
  });

export const addMixerBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://mixer.com/${user}`);
