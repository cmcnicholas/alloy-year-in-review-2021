/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { ContainerWebModelOfString } from './ContainerWebModelOfString';
import type { ItemAttributeWebModel } from './ItemAttributeWebModel';
import type { ItemCloneModeWebModelOfCloneCascadeMode } from './ItemCloneModeWebModelOfCloneCascadeMode';
import type { ItemCloneModeWebModelOfCloneReparentMode } from './ItemCloneModeWebModelOfCloneReparentMode';

/**
 * Web request model for an item clone operation
 */
export type ItemCloneWebRequestModel = {
  /**
   * The Collection to which this item belongs to
   */
  collection: CollectionCode;
  /**
   * If specified, the icon to set on the cloned item
   */
  icon?: ContainerWebModelOfString | null;
  /**
   * If specified, the colour to set on the cloned item
   */
  colour?: ContainerWebModelOfString | null;
  /**
   * The items which will act as parents for the cloned item
   * Key is the link attribute code, value is the list of parent item id which are linked via the attribute code
   */
  parents?: Record<string, Array<string>> | null;
  /**
   * The item attributes to set on the cloned item
   */
  attributes?: Array<ItemAttributeWebModel> | null;
  /**
   * Cascade modes per graph code to use when cloning child items. If the same graph code is specified more than once,
   * only the last entry will be used
   */
  cascadeModes?: Array<ItemCloneModeWebModelOfCloneCascadeMode> | null;
  /**
   * Reparent modes per graph code to use when linking cloned items back to original parents. If the same graph
   * code is specified more than once, only the last entry will be used
   */
  reparentModes?: Array<ItemCloneModeWebModelOfCloneReparentMode> | null;
};

export namespace ItemCloneWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemCloneWebRequestModel';
}
