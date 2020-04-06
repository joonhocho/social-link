import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'appstore';

export const addAppStore = (parser: SocialLinkParser) =>
  parser.register(
    ['apps.apple.com', 'itunes.apple.com'],
    ({ pathnameParts }) => {
      const [region, app, name, user] = pathnameParts;
      if (app.toLowerCase() === 'app' && user) {
        const regionL = region.toLowerCase();
        return {
          service,
          type: 'app',
          user,
          url: `https://apps.apple.com/${regionL}/app/${encodeURIComponent(
            name
          )}/${user}`,
          params: {
            region: regionL,
            name,
          },
        };
      }
      return null;
    }
  );

export const addAppStoreBuilder = (builder: SocialLinkBuilder) =>
  builder.register(
    service,
    ({ user, params: { region = 'us', name = 'null' } = {} }) =>
      `https://apps.apple.com/${region}/app/${encodeURIComponent(name)}/${user}`
  );
