/* eslint-disable */

import type { DodiAttributePermissionsGetWebResponseModel } from './DodiAttributePermissionsGetWebResponseModel';
import type { DodiAttributePermissionWebModel } from './DodiAttributePermissionWebModel';
import type { DodiPermissionResponseWebModel } from './DodiPermissionResponseWebModel';

/**
 * Web model for a dodi permissions get operation
 */
export type DodiPermissionsGetWebResponseModel = {
  /**
   * The array containing the dodi permissions
   */
  dodiPermissions: Array<DodiPermissionResponseWebModel>;
  /**
   * The array containing the permissions on the attributes belonging to this dodi
   */
  attributesPermissions: Array<DodiAttributePermissionsGetWebResponseModel>;
  /**
   * The default permissions for dodi attributes.
   */
  defaultAttributePermissions: Array<DodiAttributePermissionWebModel>;
};

export namespace DodiPermissionsGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiPermissionsGetWebResponseModel';
}
