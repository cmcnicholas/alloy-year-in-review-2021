/* eslint-disable */

/**
 * Web request model for a forgot password operation
 */
export type ForgotPasswordWebRequestModel = {
  /**
   * The email address for which the password has been forgotten
   */
  email: string;
};

export namespace ForgotPasswordWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ForgotPasswordWebRequestModel';
}
