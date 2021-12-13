/* eslint-disable */

import type { BulkApiRequestBase } from './BulkApiRequestBase';

export type ItemDeleteBulkWebRequestModel = BulkApiRequestBase & {
  /**
   * The AId of the item to delete
   */
  deleteId: string;
};

export namespace ItemDeleteBulkWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemDeleteBulkWebRequestModel';
}
