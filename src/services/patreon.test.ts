import { addPatreon, addPatreonBuilder } from './patreon';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('patreon', () => {
  const parser = new SocialLinkParser();
  addPatreon(parser);

  const builder = new SocialLinkBuilder();
  addPatreonBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://patreon.com/${user}`)).toEqual({
    service: 'patreon',
    type: 'user',
    url: `https://www.patreon.com/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://www.patreon.com/${user}`)!)
  ).toEqual(`https://www.patreon.com/${user}`);
});
