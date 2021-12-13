/* eslint-disable */

/**
 * Web request model for a user group user remove operation
 */
export type UserGroupRemoveUserWebRequestModel = {
  /**
   * The usernames of the users to remove from the user groups
   */
  usernames: Array<string>;
  /**
   * The Guc of the user groups to remove the users from
   */
  userGroups: Array<string>;
};

export namespace UserGroupRemoveUserWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'UserGroupRemoveUserWebRequestModel';
}
