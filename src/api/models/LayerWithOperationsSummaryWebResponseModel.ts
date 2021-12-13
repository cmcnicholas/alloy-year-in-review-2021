/* eslint-disable */

import type { LayerOperationsSummaryWebModel } from './LayerOperationsSummaryWebModel';
import type { LayerWebModel } from './LayerWebModel';

/**
 * Web model for a layer
 */
export type LayerWithOperationsSummaryWebResponseModel = {
  /**
   * The retrieved layer
   */
  layer: LayerWebModel;
  /**
   * The summary of the UAC operations allowed for this layer
   */
  operationsSummary: LayerOperationsSummaryWebModel;
};

export namespace LayerWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerWithOperationsSummaryWebResponseModel';
}
