/* eslint-disable */

import type { ItemGraphWebModel } from './ItemGraphWebModel';

/**
 * Web model for an item graph child
 */
export type ItemGraphChildWebModel = {
  /**
   * The dodi attribute Guc
   */
  attributeCode: string;
  /**
   * The child item links for the attribute code
   */
  items: Array<ItemGraphWebModel>;
};

export namespace ItemGraphChildWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemGraphChildWebModel';
}
