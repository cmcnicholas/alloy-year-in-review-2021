/* eslint-disable */

import type { ModuleWebModel } from './ModuleWebModel';

/**
 * Get web response model for an alloy module
 */
export type ModuleGetWebResponseModel = {
  /**
   * The module returned as a result
   */
  module: ModuleWebModel;
};

export namespace ModuleGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ModuleGetWebResponseModel';
}
