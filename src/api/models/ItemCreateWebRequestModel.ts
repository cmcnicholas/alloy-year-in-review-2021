/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { ItemAttributeWebModel } from './ItemAttributeWebModel';

/**
 * Web request model for an item create operation
 */
export type ItemCreateWebRequestModel = {
  /**
   * The Guc of the design this item belongs to
   */
  designCode: string;
  /**
   * The Collection to which this item belongs to
   */
  collection: CollectionCode;
  /**
   * The item icon code, if specified, otherwise the design icon is used instead
   */
  icon?: string | null;
  /**
   * The item colour, if specified, otherwise the design colour is used instead
   */
  colour?: string | null;
  /**
   * The item attributes belonging to this item
   */
  attributes?: Array<ItemAttributeWebModel> | null;
  /**
   * The items which will act as parents for the created item
   * Key is the link attribute code, value is the list of parent item id which are linked via the attribute code
   */
  parents?: Record<string, Array<string>> | null;
  /**
   * Optional, set whether the item should be created as locked or not.
   * Only admin users can set an item to locked.
   * Once locked, the item cannot be edited or deleted.
   *
   * A null value here means to create the item as unlocked.
   */
  locked?: boolean | null;
};

export namespace ItemCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemCreateWebRequestModel';
}
