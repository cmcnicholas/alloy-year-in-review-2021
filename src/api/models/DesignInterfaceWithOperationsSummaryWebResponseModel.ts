/* eslint-disable */

import type { DesignInterfaceWebModel } from './DesignInterfaceWebModel';
import type { DodiOperationsSummaryWebModel } from './DodiOperationsSummaryWebModel';

/**
 * Web model for a DesignInterface
 */
export type DesignInterfaceWithOperationsSummaryWebResponseModel = {
  /**
   * The DesignInterface returned as a result
   */
  designInterface: DesignInterfaceWebModel;
  /**
   * The summary of the UAC operations allowed for this DesignInterface
   */
  operationsSummary: DodiOperationsSummaryWebModel;
};

export namespace DesignInterfaceWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DesignInterfaceWithOperationsSummaryWebResponseModel';
}
