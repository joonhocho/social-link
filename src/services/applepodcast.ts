import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'applepodcast';

export const addApplePodcast = (parser: SocialLinkParser) =>
  parser.register(
    ['podcasts.apple.com', 'itunes.apple.com'],
    ({ pathnameParts }) => {
      const [region, podcast, name, user] = pathnameParts;
      if (podcast.toLowerCase() === 'podcast' && user) {
        const regionL = region.toLowerCase();
        return {
          service,
          type: 'podcast',
          user,
          url: `https://podcasts.apple.com/${regionL}/podcast/${encodeURIComponent(
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

export const addApplePodcastBuilder = (builder: SocialLinkBuilder) =>
  builder.register(
    service,
    ({ user, params: { region = 'us', name = 'null' } = {} }) =>
      `https://podcasts.apple.com/${region}/podcast/${encodeURIComponent(
        name
      )}/${user}`
  );
