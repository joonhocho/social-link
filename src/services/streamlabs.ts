import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'streamlabs';

export const addStreamlabs = (parser: SocialLinkParser) =>
  parser.register(
    ['streamlabs.com', 'www.streamlabs.com'],
    ({ pathnameParts }) => {
      const [user] = pathnameParts;
      if (user) {
        return {
          service,
          type: 'user',
          user,
          url: `https://streamlabs.com/${user}`,
        };
      }
      return null;
    }
  );

export const addStreamlabsBuilder = (builder: SocialLinkBuilder) =>
  builder.register(service, ({ user }) => `https://streamlabs.com/${user}`);
