/* eslint-disable */

/**
 * Web request model to create an Access Policy
 */
export type AccessPolicyCreateWebRequestModel = {
  /**
   * The name of the Access Policy
   */
  name: string;
  /**
   * The Access Policy icon
   */
  enabled: boolean;
};

export namespace AccessPolicyCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AccessPolicyCreateWebRequestModel';
}
