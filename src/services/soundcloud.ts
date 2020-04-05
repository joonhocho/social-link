import { SocialLinkParser } from '_src/social-link';

const service = 'soundcloud';

export const addSoundCloud = (parser: SocialLinkParser) =>
  parser.register(
    ['soundcloud.com', 'www.soundcloud.com'],
    ({ pathnameParts }) => {
      const [username] = pathnameParts;
      if (username) {
        return {
          service,
          type: 'user',
          username,
          url: `https://soundcloud.com/${username}`,
        };
      }
      return null;
    }
  );
