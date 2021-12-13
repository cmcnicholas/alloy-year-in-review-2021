/* eslint-disable */

import type { MeshPermissionResponseWebModel } from './MeshPermissionResponseWebModel';

/**
 * Web model for a mesh permissions get operation
 */
export type MeshPermissionsGetWebResponseModel = {
  /**
   * The user groups associated to this mesh
   */
  permissions: Array<MeshPermissionResponseWebModel>;
};

export namespace MeshPermissionsGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshPermissionsGetWebResponseModel';
}
