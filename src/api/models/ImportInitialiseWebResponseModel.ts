/* eslint-disable */

import type { ImportWebModel } from './ImportWebModel';

/**
 * Initialise import web response model
 */
export type ImportInitialiseWebResponseModel = {
  /**
   * The import returned as a result
   */
  import: ImportWebModel;
  /**
   * The alloy task AId
   */
  backgroundTaskId: string;
};

export namespace ImportInitialiseWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportInitialiseWebResponseModel';
}
