import { addMixer, addMixerBuilder } from './mixer';
import { SocialLinkParser } from '_src/parser';
import { SocialLinkBuilder } from '_src/builder';

test('mixer', () => {
  const parser = new SocialLinkParser();
  addMixer(parser);

  const builder = new SocialLinkBuilder();
  addMixerBuilder(builder);

  const user = 'uSeRnAmE';

  expect(parser.parse(`https://mixer.com/${user}`)).toEqual({
    service: 'mixer',
    type: 'user',
    url: `https://mixer.com/${user}`,
    user,
  });

  expect(builder.build(parser.parse(`https://mixer.com/${user}`)!)).toEqual(
    `https://mixer.com/${user}`
  );
});
