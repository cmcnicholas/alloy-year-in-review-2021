/* eslint-disable */

import type { ItemWebModel } from './ItemWebModel';

/**
 * Web model for a an item response
 */
export type ItemGetWebResponseModel = {
  /**
   * The item returned as a result
   */
  item: ItemWebModel;
};

export namespace ItemGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemGetWebResponseModel';
}
