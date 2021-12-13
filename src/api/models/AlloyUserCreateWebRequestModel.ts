/* eslint-disable */

/**
 * Web request model for an alloy user create operation
 */
export type AlloyUserCreateWebRequestModel = {
  /**
   * The username of the user
   */
  username: string;
  /**
   * The email of the user
   */
  email: string;
  /**
   * The first name of the user
   */
  firstName: string;
  /**
   * The last name of the user
   */
  lastName: string;
};

export namespace AlloyUserCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyUserCreateWebRequestModel';
}
