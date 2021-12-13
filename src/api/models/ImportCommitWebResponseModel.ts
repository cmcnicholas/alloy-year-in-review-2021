/* eslint-disable */

import type { ImportWebModel } from './ImportWebModel';

/**
 * Commit import web response model
 */
export type ImportCommitWebResponseModel = {
  /**
   * The import returned as a result
   */
  import: ImportWebModel;
  /**
   * The alloy task AId
   */
  backgroundTaskId: string;
};

export namespace ImportCommitWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportCommitWebResponseModel';
}
