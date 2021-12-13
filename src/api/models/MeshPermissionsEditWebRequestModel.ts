/* eslint-disable */

import type { MeshPermissionWebModel } from './MeshPermissionWebModel';

/**
 * Web model for a mesh permissions edit operation
 */
export type MeshPermissionsEditWebRequestModel = {
  /**
   * The permission to add to this mesh
   */
  permissions: Array<MeshPermissionWebModel>;
  /**
   * The signature is used to ensure that the mesh being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same mesh
   */
  signature: string;
};

export namespace MeshPermissionsEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshPermissionsEditWebRequestModel';
}
