import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

const service = 'applepodcast';

export const addApplePodcast = (parser: SocialLinkParser) =>
  parser.register(
    ['podcasts.apple.com', 'itunes.apple.com'],
    ({ pathnameParts }) => {
      const [region, artist, nameOrId, idOrNull] = pathnameParts;
      if (artist.toLowerCase() === 'podcast' && nameOrId) {
        const regionL = region.toLowerCase();
        const id = idOrNull || nameOrId;
        const name = idOrNull ? nameOrId : '';
        const path = name ? `${encodeURIComponent(name)}/${id}` : id;
        return {
          service,
          type: 'podcast',
          user: id,
          url: `https://podcasts.apple.com/${regionL}/podcast/${path}`,
          params: name
            ? { region: regionL, name }
            : ({ region: regionL } as { [key: string]: string }),
        };
      }
      return null;
    }
  );

export const addApplePodcastBuilder = (builder: SocialLinkBuilder) =>
  builder.register(
    service,
    ({ user, params: { region = 'us', name } = {} }) =>
      `https://podcasts.apple.com/${region}/podcast/${
        name ? `${encodeURIComponent(name)}/` : ''
      }${user}`
  );
