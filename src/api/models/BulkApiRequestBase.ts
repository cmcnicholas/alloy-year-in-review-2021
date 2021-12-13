/* eslint-disable */

/**
 * Bulk api request base
 */
export type BulkApiRequestBase = {
  discriminator: string;
};

export namespace BulkApiRequestBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BulkApiRequestBase';
}
