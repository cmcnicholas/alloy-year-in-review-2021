/* eslint-disable */

import type { ItemWebModel } from './ItemWebModel';

/**
 * Web model for a an item edit response
 */
export type ItemEditWebResponseModel = {
  /**
   * The edited item
   */
  item: ItemWebModel;
};

export namespace ItemEditWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemEditWebResponseModel';
}
