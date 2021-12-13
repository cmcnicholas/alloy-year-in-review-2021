/* eslint-disable */

import type { BasemapAllowedAction } from './BasemapAllowedAction';

/**
 * Web model for a basemap permission
 */
export type BasemapPermissionWebModel = {
  /**
   * The Guc of the user group with permissions on this basemap
   */
  userGroupCode: string;
  /**
   * The permissions that this group has on this basemap
   */
  allows: BasemapAllowedAction;
};

export namespace BasemapPermissionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapPermissionWebModel';
}
