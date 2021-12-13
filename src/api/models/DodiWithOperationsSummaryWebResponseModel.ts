/* eslint-disable */

import type { DodiOperationsSummaryWebModel } from './DodiOperationsSummaryWebModel';
import type { DodiWebModel } from './DodiWebModel';

/**
 * Web model for a dodi with operations summary
 */
export type DodiWithOperationsSummaryWebResponseModel = {
  /**
   * The dodi returned as a result
   */
  dodi: DodiWebModel;
  /**
   * The summary of the UAC operations allowed for this dodi
   */
  operationsSummary: DodiOperationsSummaryWebModel;
};

export namespace DodiWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiWithOperationsSummaryWebResponseModel';
}
