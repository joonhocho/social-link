import { addLinkedIn } from './linkedin';
import { SocialLinkParser } from '_src/social-link';

test('linkedin', () => {
  const parser = new SocialLinkParser();
  addLinkedIn(parser);

  const username = 'uSeRnAmE';

  expect(parser.parse(`https://linkedin.com/in/${username}`)).toEqual({
    service: 'linkedin',
    type: 'user',
    url: `https://www.linkedin.com/in/${username}/`,
    username,
  });

  expect(parser.parse(`https://linkedin.com/company/${username}`)).toEqual({
    service: 'linkedin',
    type: 'company',
    url: `https://www.linkedin.com/company/${username}/`,
    username,
  });
});
