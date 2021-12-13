/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { AqsJsonParameterValue } from './AqsJsonParameterValue';

/**
 * Web request base model to start an export task
 */
export type ExportWebRequestModelBase = {
  /**
   * The AqsJsonNode containing the Aqs query that generates the export data
   */
  aqs: AqsJsonNode;
  /**
   * The parameter values to swap out in the aqs query
   */
  parameterValues?: Array<AqsJsonParameterValue> | null;
  /**
   * The optional filename to use for the export.
   *
   * If this isn't provided, a default name will be used
   */
  fileName?: string | null;
  discriminator: string;
};

export namespace ExportWebRequestModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ExportWebRequestModelBase';
}
