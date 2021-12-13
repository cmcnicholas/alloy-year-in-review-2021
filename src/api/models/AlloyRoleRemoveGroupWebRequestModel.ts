/* eslint-disable */

/**
 * Web request model for a user role user remove operation
 */
export type AlloyRoleRemoveGroupWebRequestModel = {
  /**
   * The usernames of the users to remove from the user roles
   */
  groups: Array<string>;
  /**
   * The Guc of the user roles to remove the users from
   */
  roles: Array<string>;
};

export namespace AlloyRoleRemoveGroupWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyRoleRemoveGroupWebRequestModel';
}
