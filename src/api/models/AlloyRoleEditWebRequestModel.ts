/* eslint-disable */

/**
 * Web request model for a user role edit operation
 */
export type AlloyRoleEditWebRequestModel = {
  /**
   * The new name for the user role
   */
  name: string;
  /**
   * The signature is used to ensure that the role being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same role
   */
  signature: string;
};

export namespace AlloyRoleEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyRoleEditWebRequestModel';
}
