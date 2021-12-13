/* eslint-disable */

import type { MeshPermissionWebModel } from './MeshPermissionWebModel';

export type MeshPermissionResponseWebModel = MeshPermissionWebModel & {
  /**
   * Name of the user group with permissions on this mesh
   */
  userGroupName: string;
};

export namespace MeshPermissionResponseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshPermissionResponseWebModel';
}
