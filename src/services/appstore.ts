import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'appstore';

export const addAppStore = (parser: SocialLinkParser) =>
  parser.register(
    ['apps.apple.com', 'itunes.apple.com'],
    ({ pathnameParts }) => {
      const [region, artist, nameOrId, idOrNull] = pathnameParts;
      if (artist.toLowerCase() === 'app' && nameOrId) {
        const regionL = region.toLowerCase();
        const id = idOrNull || nameOrId;
        const name = idOrNull ? nameOrId : '';
        const path = name ? `${encodeURIComponent(name)}/${id}` : id;
        return {
          service,
          type: 'app',
          user: id,
          url: `https://apps.apple.com/${regionL}/app/${path}`,
          params: name
            ? { region: regionL, name }
            : ({ region: regionL } as { [key: string]: string }),
        };
      }
      return null;
    }
  );

export const addAppStoreBuilder = (builder: SocialLinkBuilder) =>
  builder.register(
    service,
    ({ user, params: { region = 'us', name } = {} }) =>
      `https://apps.apple.com/${region}/app/${
        name ? `${encodeURIComponent(name)}/` : ''
      }${user}`
  );
