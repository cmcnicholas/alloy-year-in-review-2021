/* eslint-disable */

import type { ItemFormOperationsSummaryWebModel } from './ItemFormOperationsSummaryWebModel';
import type { ItemFormWebModel } from './ItemFormWebModel';

/**
 * Web model for an item form
 */
export type ItemFormWithOperationsSummaryWebResponseModel = {
  /**
   * The retrieved item form
   */
  itemForm: ItemFormWebModel;
  /**
   * The summary of the UAC operations allowed for this item form
   */
  operationsSummary: ItemFormOperationsSummaryWebModel;
};

export namespace ItemFormWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormWithOperationsSummaryWebResponseModel';
}
