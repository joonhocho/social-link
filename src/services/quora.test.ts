import { addQuora, addQuoraBuilder } from './quora';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('quora', () => {
  const parser = new SocialLinkParser();
  addQuora(parser);

  const builder = new SocialLinkBuilder();
  addQuoraBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://quora.com/profile/${user}`)).toEqual({
    service: 'quora',
    type: 'user',
    url: `https://www.quora.com/profile/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.quora.com/profile/${user}`)!)
  ).toEqual(`https://www.quora.com/profile/${user}`);
});
