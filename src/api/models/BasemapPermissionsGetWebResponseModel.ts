/* eslint-disable */

import type { BasemapPermissionResponseWebModel } from './BasemapPermissionResponseWebModel';

/**
 * Web model for a design permissions get operation
 */
export type BasemapPermissionsGetWebResponseModel = {
  /**
   * The user groups associated to this basemap
   */
  permissions: Array<BasemapPermissionResponseWebModel>;
};

export namespace BasemapPermissionsGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapPermissionsGetWebResponseModel';
}
