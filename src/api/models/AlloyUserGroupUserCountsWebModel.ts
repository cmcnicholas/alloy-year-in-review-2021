/* eslint-disable */

/**
 * Information on the number of users effectively in a user group
 */
export type AlloyUserGroupUserCountsWebModel = {
  /**
   * The number of users indirectly in a group due to roles
   */
  fromRoles: number;
  /**
   * The number of users in a group directly
   */
  fromGroup: number;
  /**
   * The total number of users in a group directly or indirectly due to roles
   */
  total: number;
};

export namespace AlloyUserGroupUserCountsWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyUserGroupUserCountsWebModel';
}
