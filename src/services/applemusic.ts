import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'applemusic';

export const addAppleMusic = (parser: SocialLinkParser) =>
  parser.register(
    ['music.apple.com', 'itunes.apple.com'],
    ({ pathnameParts }) => {
      const [region, artist, nameOrId, idOrNull] = pathnameParts;
      if (artist.toLowerCase() === 'artist' && nameOrId) {
        const regionL = region.toLowerCase();
        const id = idOrNull || nameOrId;
        const name = idOrNull ? nameOrId : '';
        const path = name ? `${encodeURIComponent(name)}/${id}` : id;
        return {
          service,
          type: 'artist',
          user: id,
          url: `https://music.apple.com/${regionL}/artist/${path}`,
          params: name
            ? { region: regionL, name }
            : ({ region: regionL } as { [key: string]: string }),
        };
      }
      return null;
    }
  );

export const addAppleMusicBuilder = (builder: SocialLinkBuilder) =>
  builder.register(
    service,
    ({ user, params: { region = 'us', name } = {} }) =>
      `https://music.apple.com/${region}/artist/${
        name ? `${encodeURIComponent(name)}/` : ''
      }${user}`
  );
