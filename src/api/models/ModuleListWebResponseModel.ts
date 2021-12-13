/* eslint-disable */

import type { ModuleGetWebResponseModel } from './ModuleGetWebResponseModel';

/**
 * List modules web response model
 */
export type ModuleListWebResponseModel = {
  /**
   * Installed customer modules
   */
  modules: Array<ModuleGetWebResponseModel>;
};

export namespace ModuleListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ModuleListWebResponseModel';
}
