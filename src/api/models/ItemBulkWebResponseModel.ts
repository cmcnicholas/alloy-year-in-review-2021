/* eslint-disable */

import type { AlloyExceptionWebModel } from './AlloyExceptionWebModel';

/**
 * Item bulk web response model
 */
export type ItemBulkWebResponseModel = {
  /**
   * Number of bulk operations that completed successfully
   */
  successful: number;
  /**
   * Number of bulk operations that failed
   */
  failed: number;
  /**
   * The errors corresponding to the failed operations, indexed by the position in the request
   */
  errors: Record<string, AlloyExceptionWebModel>;
  /**
   * The mapping between the request index and the id of the created item
   */
  createdItemIds: Record<string, string>;
};

export namespace ItemBulkWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemBulkWebResponseModel';
}
