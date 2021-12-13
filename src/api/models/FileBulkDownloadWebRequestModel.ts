/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { AqsJsonParameterValue } from './AqsJsonParameterValue';

/**
 * Web request model to start a bulk file download task
 */
export type FileBulkDownloadWebRequestModel = {
  /**
   * The Aqs query that identifies the files to download
   */
  aqs: AqsJsonNode;
  /**
   * The parameter values to swap out in the aqs query
   */
  parameterValues?: Array<AqsJsonParameterValue> | null;
  /**
   * The optional filename to use for the resulting archive.
   *
   * If this isn't provided, a default name will be used
   */
  fileName?: string | null;
};

export namespace FileBulkDownloadWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'FileBulkDownloadWebRequestModel';
}
