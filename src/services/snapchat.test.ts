import { addSnapchat, addSnapchatBuilder } from './snapchat';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('snapchat', () => {
  const parser = new SocialLinkParser();
  addSnapchat(parser);

  const builder = new SocialLinkBuilder();
  addSnapchatBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://snapchat.com/add/${user}`)).toEqual({
    service: 'snapchat',
    type: 'user',
    url: `https://www.snapchat.com/add/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.snapchat.com/add/${user}`)!)
  ).toEqual(`https://www.snapchat.com/add/${user}`);
});
