/* eslint-disable */

/**
 * Web request model for a master session create operation
 */
export type SessionMasterCreateWebRequestModel = {
  /**
   * The users email address
   *
   */
  email: string;
  /**
   * The users password in plain text
   *
   */
  password: string;
};

export namespace SessionMasterCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'SessionMasterCreateWebRequestModel';
}
