/* eslint-disable */

import type { OAuthProviderType } from './OAuthProviderType';

/**
 * Request model for generating OAuth provider authentication urls
 */
export type SessionCreateOAuthUrlWebRequest = {
  /**
   * The provider to authenticate with
   */
  provider: OAuthProviderType;
  /**
   * The url to redirect to at the end of a successful OAuth process
   */
  redirectUrl: string;
  /**
   * The url to redirect to if there is a failure in the OAuth process
   */
  failureUrl: string;
};

export namespace SessionCreateOAuthUrlWebRequest {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'SessionCreateOAuthUrlWebRequest';
}
