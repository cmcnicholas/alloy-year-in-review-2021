/* eslint-disable */

import type { OAuthProviderType } from './OAuthProviderType';

/**
 * Request model for generating Alloy session token from an OAuth id token
 */
export type CreateSessionFromIdTokenWebRequest = {
  /**
   * The provider to authenticate with
   */
  provider: OAuthProviderType;
  /**
   * OAuth id token
   */
  idToken: string;
};

export namespace CreateSessionFromIdTokenWebRequest {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CreateSessionFromIdTokenWebRequest';
}
