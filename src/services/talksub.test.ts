import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addTalksub, addTalksubBuilder } from './talksub';

test('talksub', () => {
  const parser = new SocialLinkParser();
  addTalksub(parser);

  const builder = new SocialLinkBuilder();
  addTalksubBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://talksub.com/user/${user}`)).toEqual({
    service: 'talksub',
    type: 'user',
    url: `https://talksub.com/user/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://talksub.com/user/${user}`)!)
  ).toEqual(`https://talksub.com/user/${user}`);
});
