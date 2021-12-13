/* eslint-disable */

import type { DesignWebModel } from './DesignWebModel';
import type { DodiOperationsSummaryWebModel } from './DodiOperationsSummaryWebModel';

/**
 * Web model for a design
 */
export type DesignWithOperationsSummaryWebResponseModel = {
  /**
   * The design returned as a result
   */
  design: DesignWebModel;
  /**
   * The summary of the UAC operations allowed for this design
   */
  operationsSummary: DodiOperationsSummaryWebModel;
};

export namespace DesignWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DesignWithOperationsSummaryWebResponseModel';
}
