/* eslint-disable */

import type { ImportWebModel } from './ImportWebModel';

/**
 * Get web model for import
 */
export type ImportGetWebResponseModel = {
  /**
   * The import returned as a result
   */
  import: ImportWebModel;
};

export namespace ImportGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportGetWebResponseModel';
}
