import { SocialLinkBuilder } from '_src/builder';
import { SocialLinkParser } from '_src/parser';

import { addMessenger, addMessengerBuilder } from './messenger';

test('messenger', () => {
  const parser = new SocialLinkParser();
  addMessenger(parser);

  const builder = new SocialLinkBuilder();
  addMessengerBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://messenger.com/t/${user}`)).toEqual({
    service: 'messenger',
    type: 'user',
    url: `https://www.messenger.com/t/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.messenger.com/t/${user}`)!)
  ).toEqual(`https://www.messenger.com/t/${user}`);

  expect(parser.parse(`https://m.me/${user}`)).toEqual({
    service: 'messenger',
    type: 'user',
    url: `https://www.messenger.com/t/${user}`,
    user,
  });
});
