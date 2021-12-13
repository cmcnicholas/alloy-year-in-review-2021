/* eslint-disable */

/**
 * The web request model for a submit password reset request operation
 */
export type SubmitPasswordResetWebRequestModel = {
  /**
   * The password that replaces the previous user's password
   */
  password: string;
};

export namespace SubmitPasswordResetWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'SubmitPasswordResetWebRequestModel';
}
