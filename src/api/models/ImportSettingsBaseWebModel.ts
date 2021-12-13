/* eslint-disable */

import type { ImportSettingsAttributeWebModel } from './ImportSettingsAttributeWebModel';

/**
 * Import base settings web model
 */
export type ImportSettingsBaseWebModel = {
  /**
   * The attribute mapping between import and destination design
   */
  attributes: Array<ImportSettingsAttributeWebModel>;
  discriminator: string;
};

export namespace ImportSettingsBaseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportSettingsBaseWebModel';
}
