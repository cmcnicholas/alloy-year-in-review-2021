/* eslint-disable */

/**
 * Response model containing the url to redirect a user to for third party authentication
 */
export type SessionCreateOAuthUrlWebResponse = {
  /**
   * The url to redirect the user to authenticate with the specified provider
   */
  url: string;
};

export namespace SessionCreateOAuthUrlWebResponse {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'SessionCreateOAuthUrlWebResponse';
}
