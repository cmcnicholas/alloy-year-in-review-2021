/* eslint-disable */

import type { BoundingBoxWebModel } from './BoundingBoxWebModel';
import type { CustomerSettingWebModel } from './CustomerSettingWebModel';

/**
 * Web model for a customer. A customer represents a system in Alloy which has its own database
 * and is separate from the other Alloy Customers
 */
export type CustomerWebModel = {
  /**
   * The customer name
   */
  name: string;
  /**
   * The customer Guc
   */
  code: string;
  /**
   * The customer settings
   */
  settings: Array<CustomerSettingWebModel>;
  /**
   * The time at which the current user last logged into this customer. Null if no login was ever realized
   */
  userLastSeen?: string | null;
  /**
   * The optional bounding box representing the area where the items are in it. It is not returned if no item
   * with geometry exists (the bounding box is recomputed periodically)
   */
  boundingBox?: BoundingBoxWebModel | null;
};

export namespace CustomerWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomerWebModel';
}
