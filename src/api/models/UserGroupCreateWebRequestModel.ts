/* eslint-disable */

/**
 * Web request model for a user group create operation
 */
export type UserGroupCreateWebRequestModel = {
  /**
   * The new name for the user group
   */
  name: string;
  /**
   * Optional tags to add to an user group if it has to follow some special behaviour in the application.
   * For example, to control visibility of certain application components.
   */
  tags?: Array<string> | null;
};

export namespace UserGroupCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'UserGroupCreateWebRequestModel';
}
