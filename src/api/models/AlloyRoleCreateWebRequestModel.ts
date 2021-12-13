/* eslint-disable */

/**
 * Web request model for a user role create operation
 */
export type AlloyRoleCreateWebRequestModel = {
  /**
   * The new name for the user role
   */
  name: string;
};

export namespace AlloyRoleCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyRoleCreateWebRequestModel';
}
