/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { AqsJsonParameterValue } from './AqsJsonParameterValue';

/**
 * Request model for listing errors of a bulk action
 */
export type SyncDeltaItemsRequestModel = {
  /**
   * The AQS query to select the items to set
   */
  aqs: AqsJsonNode;
  /**
   * The parameter values to swap out in the aqs query
   */
  parameterValues?: Array<AqsJsonParameterValue> | null;
  /**
   * The item attributes to set
   */
  graphCodes: Array<string>;
  /**
   * The date to be used as delta date. This needs to be the date when the last syncing occurred
   */
  deltaDate: string;
  /**
   * Maximum number of root items to return, or null to use the default of 10,000
   */
  maxRootItems?: number | null;
  /**
   * Optional maximum recursion depth
   */
  maxRecursionDepth?: number | null;
};

export namespace SyncDeltaItemsRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'SyncDeltaItemsRequestModel';
}
