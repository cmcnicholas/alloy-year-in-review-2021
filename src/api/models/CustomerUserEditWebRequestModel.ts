/* eslint-disable */

/**
 * Web request model for a customer user
 */
export type CustomerUserEditWebRequestModel = {
  /**
   * To enable the customer user
   */
  enabled: boolean;
};

export namespace CustomerUserEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomerUserEditWebRequestModel';
}
