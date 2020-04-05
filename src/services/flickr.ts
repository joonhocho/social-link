import { SocialLinkParser } from '_src/social-link';

const service = 'flickr';

export const addFlickr = (parser: SocialLinkParser) =>
  parser.register(['flickr.com', 'www.flickr.com'], ({ pathnameParts }) => {
    const [p0, username] = pathnameParts;
    if (p0.toLowerCase() === 'photos' && username) {
      return {
        service,
        type: 'user',
        username,
        url: `https://www.flickr.com/photos/${username}/`,
      };
    }
    return null;
  });
