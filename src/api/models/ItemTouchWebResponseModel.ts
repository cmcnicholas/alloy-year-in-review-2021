/* eslint-disable */

import type { ItemWebModel } from './ItemWebModel';

/**
 * Web model for a an item edit response
 */
export type ItemTouchWebResponseModel = {
  /**
   * The edited item
   */
  item: ItemWebModel;
};

export namespace ItemTouchWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemTouchWebResponseModel';
}
