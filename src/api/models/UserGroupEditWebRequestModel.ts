/* eslint-disable */

/**
 * Web request model for a user group edit operation
 */
export type UserGroupEditWebRequestModel = {
  /**
   * The new name for the user group
   */
  name: string;
  /**
   * Optional tags to add to an user group if it has to follow some special behaviour in the application.
   * For example, to control visibility of certain application components.
   * If null is passed in any currently set user groups will be removed.
   */
  tags?: Array<string> | null;
  /**
   * The signature is used to ensure that the group being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same group
   */
  signature: string;
};

export namespace UserGroupEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'UserGroupEditWebRequestModel';
}
