import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addFlickr, addFlickrBuilder } from './flickr';

test('flickr', () => {
  const parser = new SocialLinkParser();
  addFlickr(parser);

  const builder = new SocialLinkBuilder();
  addFlickrBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://flickr.com/photos/${user}`)).toEqual({
    service: 'flickr',
    type: 'user',
    url: `https://www.flickr.com/photos/${user}/`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.flickr.com/photos/${user}/`)!)
  ).toEqual(`https://www.flickr.com/photos/${user}/`);
});
