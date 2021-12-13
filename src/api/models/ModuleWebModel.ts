/* eslint-disable */

import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Web model for an alloy module
 */
export type ModuleWebModel = {
  /**
   * The date time at which the module was installed
   */
  installed: string;
  /**
   * The module name
   */
  name: string;
  /**
   * The unique module code
   */
  code: string;
  /**
   * The metadata to a card
   */
  metadata: MetadataWebModel;
};

export namespace ModuleWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ModuleWebModel';
}
