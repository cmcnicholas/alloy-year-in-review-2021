/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { ItemAttributeWebModel } from './ItemAttributeWebModel';

/**
 * Web model for a reconstructed item
 */
export type ReconstructedItemWebModel = {
  /**
   * The item AId
   */
  itemId: string;
  /**
   * The Guc of the design this reconstructed item belongs to
   */
  designCode: string;
  /**
   * The Collection to which this reconstructed item belongs to
   */
  collection: CollectionCode;
  /**
   * The item icon code, if specified, otherwise the design icon has to be used instead
   */
  icon?: string | null;
  /**
   * The item colour, if specified, otherwise the design colour has to be used instead
   */
  colour?: string | null;
  /**
   * Whether the item is locked for edit or not. Null result means the item is not locked.
   */
  locked?: boolean | null;
  /**
   * The item attributes belonging to this item
   */
  attributes: Array<ItemAttributeWebModel>;
  /**
   * The signature to send for every edit/delete operation related to this item
   */
  signature: string;
};

export namespace ReconstructedItemWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ReconstructedItemWebModel';
}
