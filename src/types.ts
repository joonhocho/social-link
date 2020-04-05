import { URL } from 'ts-url';

export type SocialNetwork =
  | 'behance'
  | 'dribbble'
  | 'email'
  | 'etsy'
  | 'facebook'
  | 'flickr'
  | 'instagram'
  | 'linkedin'
  | 'medium'
  | 'messenger'
  | 'patreon'
  | 'pinterest'
  | 'reddit'
  | 'snapchat'
  | 'soundcloud'
  | 'tiktok'
  | 'tumblr'
  | 'twitch'
  | 'twitter'
  | 'vk'
  | 'website'
  | 'wechat'
  | 'whatsapp'
  | 'yelp'
  | 'youtube';

export type OtherService = 'website' | 'email' | 'phone';

export interface ISocialProfile {
  service: SocialNetwork | OtherService | string;
  type: string; // user, group, shop, page
  userId?: string;
  username?: string;
  url: string;
}

export type SocialLinkParseFunction = (
  urlObject: URL,
  originalUrl: string
) => ISocialProfile | null;

export type SocialLinkHostMatcher = (hostname: string) => boolean;
