/* eslint-disable */

import type { ImportWebModel } from './ImportWebModel';

/**
 * Validate import web response model
 */
export type ImportValidateWebResponseModel = {
  /**
   * The import returned as a result
   */
  import: ImportWebModel;
  /**
   * The alloy task AId
   */
  backgroundTaskId: string;
};

export namespace ImportValidateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportValidateWebResponseModel';
}
