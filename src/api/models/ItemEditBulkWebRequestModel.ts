/* eslint-disable */

import type { BulkApiRequestBase } from './BulkApiRequestBase';
import type { ItemEditWebRequestModel } from './ItemEditWebRequestModel';

export type ItemEditBulkWebRequestModel = BulkApiRequestBase & {
  /**
   * The item edit request
   */
  editRequest: ItemEditWebRequestModel;
  /**
   * The AId of the item to edit
   */
  editItemId: string;
};

export namespace ItemEditBulkWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemEditBulkWebRequestModel';
}
