/* eslint-disable */

import type { ImportSettingsBaseWebModel } from './ImportSettingsBaseWebModel';

export type ImportSettingsStandardFormatWithNetworkWebModel = ImportSettingsBaseWebModel & {
  /**
   * Target network for network referencing
   */
  networkDesignCode: string;
};

export namespace ImportSettingsStandardFormatWithNetworkWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportSettingsStandardFormatWithNetworkWebModel';
}
