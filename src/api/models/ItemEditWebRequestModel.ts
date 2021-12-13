/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { ContainerWebModelOfBoolean } from './ContainerWebModelOfBoolean';
import type { ItemAttributeWebModel } from './ItemAttributeWebModel';

/**
 * Web request model for an item edit operation
 */
export type ItemEditWebRequestModel = {
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
   * The signature that has to match that on the item being edited
   */
  signature: string;
  /**
   * Optional, set whether the item should be locked or not.
   * Only admin users can set an item to locked.
   * Once locked, the item cannot be edited or deleted.
   *
   * A null value here means to leave the item's locked status unchanged by the edit
   */
  locked?: ContainerWebModelOfBoolean | null;
};

export namespace ItemEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemEditWebRequestModel';
}
