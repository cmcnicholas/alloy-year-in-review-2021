/* eslint-disable */

/**
 * Web request model for a user role user add operation
 */
export type AlloyRoleAddGroupWebRequestModel = {
  /**
   * The usernames of the users to add to the user roles
   */
  groups: Array<string>;
  /**
   * The Guc of the user roles to add the users to
   */
  roles: Array<string>;
};

export namespace AlloyRoleAddGroupWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyRoleAddGroupWebRequestModel';
}
