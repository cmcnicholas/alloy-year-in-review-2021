/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { AqsJsonParameterValue } from './AqsJsonParameterValue';

/**
 * Web request model to delete items
 */
export type DeleteItemsBulkActionWebRequestModel = {
  /**
   * The AQS query to select the items to delete
   */
  aqs: AqsJsonNode;
  /**
   * The parameter values to swap out in the aqs query
   */
  parameterValues?: Array<AqsJsonParameterValue> | null;
};

export namespace DeleteItemsBulkActionWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DeleteItemsBulkActionWebRequestModel';
}
