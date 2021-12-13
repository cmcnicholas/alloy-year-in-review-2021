/* eslint-disable */

import type { BulkApiRequestBase } from './BulkApiRequestBase';
import type { ItemCloneWebRequestModel } from './ItemCloneWebRequestModel';

export type ItemCloneBulkWebRequestModel = BulkApiRequestBase & {
  /**
   * The item clone request
   */
  cloneRequest: ItemCloneWebRequestModel;
  /**
   * The AId of the item to clone
   */
  cloneItemId: string;
};

export namespace ItemCloneBulkWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemCloneBulkWebRequestModel';
}
