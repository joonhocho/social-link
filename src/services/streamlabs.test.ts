import { addStreamlabs, addStreamlabsBuilder } from './streamlabs';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('streamlabs', () => {
  const parser = new SocialLinkParser();
  addStreamlabs(parser);

  const builder = new SocialLinkBuilder();
  addStreamlabsBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://streamlabs.com/${user}`)).toEqual({
    service: 'streamlabs',
    type: 'user',
    url: `https://streamlabs.com/${user}`,
    user,
  });

  expect(
    builder.build(parser.parse(`https://streamlabs.com/${user}`)!)
  ).toEqual(`https://streamlabs.com/${user}`);
});
