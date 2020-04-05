import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addLinkedIn, addLinkedInBuilder } from './linkedin';

test('linkedin', () => {
  const parser = new SocialLinkParser();
  addLinkedIn(parser);

  const builder = new SocialLinkBuilder();
  addLinkedInBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://linkedin.com/in/${user}`)).toEqual({
    service: 'linkedin',
    type: 'user',
    url: `https://www.linkedin.com/in/${user}/`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.linkedin.com/in/${user}/`)!)
  ).toEqual(`https://www.linkedin.com/in/${user}/`);

  expect(parser.parse(`https://linkedin.com/company/${user}`)).toEqual({
    service: 'linkedin',
    type: 'company',
    url: `https://www.linkedin.com/company/${user}/`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.linkedin.com/company/${user}/`)!)
  ).toEqual(`https://www.linkedin.com/company/${user}/`);
});
