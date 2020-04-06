import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'applemusic';

export const addAppleMusic = (parser: SocialLinkParser) =>
  parser.register(
    ['music.apple.com', 'itunes.apple.com'],
    ({ pathnameParts }) => {
      const [region, artist, name, user] = pathnameParts;
      if (artist.toLowerCase() === 'artist' && user) {
        const regionL = region.toLowerCase();
        return {
          service,
          type: 'artist',
          user,
          url: `https://music.apple.com/${regionL}/artist/${encodeURIComponent(
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

export const addAppleMusicBuilder = (builder: SocialLinkBuilder) =>
  builder.register(
    service,
    ({ user, params: { region = 'us', name = 'null' } = {} }) =>
      `https://music.apple.com/${region}/artist/${encodeURIComponent(
        name
      )}/${user}`
  );
