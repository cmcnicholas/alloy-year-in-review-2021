/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfMeshAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfMeshAccessAdvisorWebModel';

export type MeshAccessAdvisorByRoleListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfMeshAccessAdvisorWebModel & {
    /**
     * True if results were requested for role that contains power groups (Admin or Mesh Manager)
     */
    isPowerRole: boolean;
  };

export namespace MeshAccessAdvisorByRoleListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshAccessAdvisorByRoleListWebResponseModel';
}
