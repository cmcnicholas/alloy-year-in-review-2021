/* eslint-disable */

import type { ItemLogWebModel } from './ItemLogWebModel';
import type { ReconstructedItemDeltaWebModel } from './ReconstructedItemDeltaWebModel';
import type { ReconstructedItemWebModel } from './ReconstructedItemWebModel';

/**
 * Web response model for an item log query operation
 */
export type ItemQueryGetWebResponseModel = {
  /**
   * The item log
   */
  log?: ItemLogWebModel | null;
  /**
   * The state of the item as queried
   */
  item?: ReconstructedItemWebModel | null;
  /**
   * The previous values of the item that were changed
   */
  previous?: ReconstructedItemDeltaWebModel | null;
};

export namespace ItemQueryGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemQueryGetWebResponseModel';
}
