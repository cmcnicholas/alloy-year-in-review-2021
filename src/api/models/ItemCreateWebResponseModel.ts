/* eslint-disable */

import type { ItemWebModel } from './ItemWebModel';

/**
 * Web model for an item create response
 */
export type ItemCreateWebResponseModel = {
  /**
   * The created item
   */
  item: ItemWebModel;
};

export namespace ItemCreateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemCreateWebResponseModel';
}
