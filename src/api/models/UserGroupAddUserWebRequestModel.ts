/* eslint-disable */

/**
 * Web request model for a user group user add operation
 */
export type UserGroupAddUserWebRequestModel = {
  /**
   * The usernames of the users to add to the user groups
   */
  usernames: Array<string>;
  /**
   * The Guc of the user groups to add the users to
   */
  userGroups: Array<string>;
};

export namespace UserGroupAddUserWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'UserGroupAddUserWebRequestModel';
}
