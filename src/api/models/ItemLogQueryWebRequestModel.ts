/* eslint-disable */

/**
 * Web request model for an item log query operation
 */
export type ItemLogQueryWebRequestModel = {
  /**
   * The point in audit time to query
   */
  date: string;
};

export namespace ItemLogQueryWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemLogQueryWebRequestModel';
}
