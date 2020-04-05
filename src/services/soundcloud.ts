import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'soundcloud';

export const addSoundCloud = (parser: SocialLinkParser) =>
  parser.register(
    ['soundcloud.com', 'www.soundcloud.com'],
    ({ pathnameParts }) => {
      const [user] = pathnameParts;
      if (user) {
        return {
          service,
          type: 'user',
          user,
          url: `https://soundcloud.com/${user}`,
        };
      }
      return null;
    }
  );

export const addSoundCloudBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://soundcloud.com/${user}`);
