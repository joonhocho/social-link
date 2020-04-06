import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'spotify';

export const addSpotify = (parser: SocialLinkParser) =>
  parser.register(
    ['spotify.com', 'www.spotify.com', 'open.spotify.com'],
    ({ pathnameParts }) => {
      const [p0, user] = pathnameParts;
      if (p0.toLowerCase() === 'artist' && user) {
        return {
          service,
          type: 'artist',
          user,
          url: `https://open.spotify.com/artist/${user}`,
        };
      }
      return null;
    }
  );

export const addSpotifyBuilder = (builder: SocialLinkBuilder) =>
  builder.register(
    service,
    ({ user }) => `https://open.spotify.com/artist/${user}`
  );
