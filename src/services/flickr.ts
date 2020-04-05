import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

const service = 'flickr';

export const addFlickr = (parser: SocialLinkParser) =>
  parser.register(['flickr.com', 'www.flickr.com'], ({ pathnameParts }) => {
    const [p0, user] = pathnameParts;
    if (p0.toLowerCase() === 'photos' && user) {
      return {
        service,
        type: 'user',
        user,
        url: `https://www.flickr.com/photos/${user}/`,
      };
    }
    return null;
  });

export const addFlickrBuilder = (builder: SocialLinkBuilder) =>
  builder.register(
    service,
    ({ user }) => `https://www.flickr.com/photos/${user}/`
  );
