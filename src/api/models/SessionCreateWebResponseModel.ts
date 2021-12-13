/* eslint-disable */

/**
 * Web response model for a session create operation
 */
export type SessionCreateWebResponseModel = {
  /**
   * The session token to use for authenticated operations
   */
  token: string;
};

export namespace SessionCreateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'SessionCreateWebResponseModel';
}
