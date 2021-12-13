/* eslint-disable */

import type { ContainerWebModelOfBoolean } from './ContainerWebModelOfBoolean';
import type { ContainerWebModelOfCollectionCode } from './ContainerWebModelOfCollectionCode';
import type { ContainerWebModelOfDateTime } from './ContainerWebModelOfDateTime';
import type { ContainerWebModelOfString } from './ContainerWebModelOfString';
import type { ItemAttributeWebModel } from './ItemAttributeWebModel';

/**
 * Web model for a reconstructed previous state
 */
export type ReconstructedItemDeltaWebModel = {
  /**
   * Any attributes that were changed
   */
  attributes?: Array<ItemAttributeWebModel> | null;
  /**
   * The collection, if it was changed
   */
  collection?: ContainerWebModelOfCollectionCode | null;
  /**
   * The start date, if it was changed
   */
  start?: ContainerWebModelOfDateTime | null;
  /**
   * The end date, if it was changed
   */
  end?: ContainerWebModelOfDateTime | null;
  /**
   * The icon, if it was changed
   */
  icon?: ContainerWebModelOfString | null;
  /**
   * The colour, if it was changed
   */
  colour?: ContainerWebModelOfString | null;
  /**
   * Whether the item is locked for edit or not. Null result means the item is not locked.
   */
  locked?: ContainerWebModelOfBoolean | null;
  /**
   * The signature
   */
  signature: string;
};

export namespace ReconstructedItemDeltaWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ReconstructedItemDeltaWebModel';
}
