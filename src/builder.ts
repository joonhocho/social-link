import { SocialLinkBuildFunction, ISocialProfileToBuild } from './types';

export class SocialLinkBuilder {
  private _builders: { [service: string]: SocialLinkBuildFunction[] } = {};

  public register(service: string, builder: SocialLinkBuildFunction): void {
    const { _builders } = this;
    (_builders[service] || (_builders[service] = [])).push(builder);
  }

  public build(info: ISocialProfileToBuild): string | null {
    const { _builders } = this;

    const builders = _builders[info.service];
    for (let i = 0, l = builders.length; i < l; i += 1) {
      const url = builders[i](info);
      if (url) {
        return url;
      }
    }

    return null;
  }
}
