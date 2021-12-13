/* eslint-disable */

import type { BasemapPermissionWebModel } from './BasemapPermissionWebModel';

export type BasemapPermissionResponseWebModel = BasemapPermissionWebModel & {
  /**
   * Name of the user group with permissions on this basemap
   */
  userGroupName: string;
};

export namespace BasemapPermissionResponseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapPermissionResponseWebModel';
}
