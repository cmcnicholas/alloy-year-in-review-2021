/* eslint-disable */

import type { BulkApiRequestBase } from './BulkApiRequestBase';
import type { ItemCreateWebRequestModel } from './ItemCreateWebRequestModel';

export type ItemCreateBulkWebRequestModel = BulkApiRequestBase & {
  /**
   * The item create request
   */
  createRequest: ItemCreateWebRequestModel;
  /**
   * If specified, this will be a temporary Item Id used to identify this item in subsequent bulk requests within
   * the containing ItemBulkWebRequestModel, used as either a parent or child id.
   *
   * E.g. you can create an item specifying an ItemId and use the same id as a child item id in a later edit.
   * The actual ItemId used by the engine will be newly generated and returned in the response
   * via ItemBulkWebResponseModel.CreatedItemIds
   *
   * WARNING, this is only to be used in very specific cases, like when an item is being created and you need to
   * know the id of that item in order to link it to other items within the same operation. The id being passed in
   * must be generated using a proper ObjectId generation library.
   */
  itemId?: string | null;
};

export namespace ItemCreateBulkWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemCreateBulkWebRequestModel';
}
