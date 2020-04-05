import {
  ISocialProfile,
  SocialLinkParseFunction,
  SocialLinkHostMatcher,
} from './types';
import { URL } from 'ts-url';

export class SocialLinkParser {
  private _parsers: { [hostname: string]: SocialLinkParseFunction[] } = {};
  private _wildParsers: Array<
    [SocialLinkHostMatcher, SocialLinkParseFunction]
  > = [];

  public register(
    hostnames: Array<string | ((hostname: string) => boolean)>,
    parser: SocialLinkParseFunction
  ): void {
    const { _parsers, _wildParsers } = this;
    for (let i = 0, l = hostnames.length; i < l; i += 1) {
      const hostname = hostnames[i];
      if (typeof hostname === 'string') {
        (_parsers[hostname] || (_parsers[hostname] = [])).push(parser);
      } else {
        _wildParsers.push([hostname, parser]);
      }
    }
  }

  public parse(url: string): ISocialProfile | null {
    const { _parsers, _wildParsers } = this;

    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();

    const parsers = _parsers[hostname];
    if (parsers) {
      for (let i = 0, l = parsers.length; i < l; i += 1) {
        const res = parsers[i](urlObj, url);
        if (res) {
          return res;
        }
      }
    }

    for (let i = 0, l = _wildParsers.length; i < l; i += 1) {
      const [matchHost, parser] = _wildParsers[i];
      if (matchHost(hostname)) {
        const res = parser(urlObj, url);
        if (res) {
          return res;
        }
      }
    }

    return null;
  }
}
