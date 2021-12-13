/* eslint-disable */

import type { BulkApiRequestBase } from './BulkApiRequestBase';

/**
 * Item bulk web request model
 */
export type ItemBulkWebRequestModel = {
  /**
   * The requests to be executed
   */
  requests: Array<BulkApiRequestBase>;
};

export namespace ItemBulkWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemBulkWebRequestModel';
}
