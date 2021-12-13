/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { AqsJsonParameterValue } from './AqsJsonParameterValue';

/**
 * Web request model for an Aqs statistics operation (the body payload)
 */
export type AqsStatisticsWebRequestBodyModel = {
  /**
   * the aqs query to process
   */
  aqs: AqsJsonNode;
  /**
   * the parameter values to swap out in the aqs query
   */
  parameterValues?: Array<AqsJsonParameterValue> | null;
};

export namespace AqsStatisticsWebRequestBodyModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AqsStatisticsWebRequestBodyModel';
}
