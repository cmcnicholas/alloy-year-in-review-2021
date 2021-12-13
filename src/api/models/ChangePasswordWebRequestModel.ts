/* eslint-disable */

/**
 * The web request model for a change password operation
 */
export type ChangePasswordWebRequestModel = {
  /**
   * The user's old password
   */
  oldPassword: string;
  /**
   * The user's new password
   */
  newPassword: string;
};

export namespace ChangePasswordWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ChangePasswordWebRequestModel';
}
