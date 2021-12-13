/* eslint-disable */

import type { BasemapOperationsSummaryWebModel } from './BasemapOperationsSummaryWebModel';
import type { BasemapWebModelBase } from './BasemapWebModelBase';

/**
 * Web model for a basemap
 */
export type BasemapWithOperationsSummaryWebResponseModel = {
  /**
   * The retrieved basemap
   */
  basemap: BasemapWebModelBase;
  /**
   * The summary of the UAC operations allowed for this layer
   */
  operationsSummary: BasemapOperationsSummaryWebModel;
};

export namespace BasemapWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapWithOperationsSummaryWebResponseModel';
}
