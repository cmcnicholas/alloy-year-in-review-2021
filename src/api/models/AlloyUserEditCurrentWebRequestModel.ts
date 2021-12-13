/* eslint-disable */

/**
 * Web request model for an alloy user edit current web request model
 */
export type AlloyUserEditCurrentWebRequestModel = {
  /**
   * The first name of the user
   */
  firstName: string;
  /**
   * The last name of the user
   */
  lastName: string;
};

export namespace AlloyUserEditCurrentWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyUserEditCurrentWebRequestModel';
}
