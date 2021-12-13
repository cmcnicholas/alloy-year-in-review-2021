/* eslint-disable */

import type { MeshOperationsSummaryWebModel } from './MeshOperationsSummaryWebModel';
import type { MeshPermissionResponseWebModel } from './MeshPermissionResponseWebModel';
import type { MeshWebModel } from './MeshWebModel';

/**
 * Web model for a mesh
 */
export type MeshWithPermissionsWebResponseModel = {
  /**
   * The retrieved mesh
   */
  mesh: MeshWebModel;
  /**
   * The summary of the UAC operations allowed for this layer
   */
  operationsSummary: MeshOperationsSummaryWebModel;
  /**
   * The user groups associated to this mesh
   */
  permissions: Array<MeshPermissionResponseWebModel>;
};

export namespace MeshWithPermissionsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshWithPermissionsWebResponseModel';
}
