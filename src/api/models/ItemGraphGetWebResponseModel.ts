/* eslint-disable */

import type { ItemGraphWebModel } from './ItemGraphWebModel';

/**
 * Web model for the item graph response
 */
export type ItemGraphGetWebResponseModel = {
  /**
   * The item graph returned as a result
   */
  itemGraph: ItemGraphWebModel;
};

export namespace ItemGraphGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemGraphGetWebResponseModel';
}
