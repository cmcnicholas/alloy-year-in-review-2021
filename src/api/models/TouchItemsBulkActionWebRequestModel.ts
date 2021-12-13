/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { AqsJsonParameterValue } from './AqsJsonParameterValue';

/**
 * Web request model to touch items
 */
export type TouchItemsBulkActionWebRequestModel = {
  /**
   * The AQS query to select the items to Touch
   */
  aqs: AqsJsonNode;
  /**
   * The parameter values to swap out in the aqs query
   */
  parameterValues?: Array<AqsJsonParameterValue> | null;
};

export namespace TouchItemsBulkActionWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'TouchItemsBulkActionWebRequestModel';
}
