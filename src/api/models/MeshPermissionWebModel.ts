/* eslint-disable */

import type { MeshAllowedAction } from './MeshAllowedAction';

/**
 * Web model for a mesh permission
 */
export type MeshPermissionWebModel = {
  /**
   * The Guc of the user group with permissions on this mesh
   */
  userGroupCode: string;
  /**
   * The permissions that this group has on this mesh
   */
  allows: MeshAllowedAction;
};

export namespace MeshPermissionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshPermissionWebModel';
}
