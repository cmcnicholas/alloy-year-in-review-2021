/* eslint-disable */

import type { BasemapAllowedAction } from './BasemapAllowedAction';
import type { BasemapWebModelBase } from './BasemapWebModelBase';

/**
 * Web model for a basemap access advisor
 */
export type BasemapAccessAdvisorWebModel = {
  /**
   * The retrieved basemap
   */
  basemap: BasemapWebModelBase;
  /**
   * The winning permissions that users have on this basemap (for all user groups they belong to)
   */
  winningPermission: BasemapAllowedAction;
};

export namespace BasemapAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapAccessAdvisorWebModel';
}
