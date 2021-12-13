/* eslint-disable */

import type { ItemGraphChildWebModel } from './ItemGraphChildWebModel';
import type { ItemWebModel } from './ItemWebModel';

/**
 * Web model for an item graph
 */
export type ItemGraphWebModel = {
  /**
   * The item we are retrieving graph for
   */
  item: ItemWebModel;
  /**
   * The graph children item links for the item (all recursive links i.e. subtree under the item)
   */
  children: Array<ItemGraphChildWebModel>;
};

export namespace ItemGraphWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemGraphWebModel';
}
