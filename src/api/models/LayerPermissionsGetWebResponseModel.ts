/* eslint-disable */

import type { LayerPermissionResponseWebModel } from './LayerPermissionResponseWebModel';

/**
 * Web model for a layer permissions get operation
 */
export type LayerPermissionsGetWebResponseModel = {
  /**
   * The user groups associated with this layer
   */
  permissions: Array<LayerPermissionResponseWebModel>;
};

export namespace LayerPermissionsGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerPermissionsGetWebResponseModel';
}
