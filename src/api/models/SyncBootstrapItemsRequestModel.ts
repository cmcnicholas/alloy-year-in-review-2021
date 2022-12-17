/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { AqsJsonParameterValue } from './AqsJsonParameterValue';

/**
 * Request model for listing errors of a bulk action
 */
export type SyncBootstrapItemsRequestModel = {
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
   * Maximum number of root items to return, or null to fetch all the results
   */
  maxRootItems?: number | null;
  /**
   * Optional maximum recursion depth
   */
  maxRecursionDepth?: number | null;
};

export namespace SyncBootstrapItemsRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'SyncBootstrapItemsRequestModel';
}
