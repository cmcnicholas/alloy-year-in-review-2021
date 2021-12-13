/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfMeshAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfMeshAccessAdvisorWebModel';

export type MeshAccessAdvisorByUserListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfMeshAccessAdvisorWebModel & {
    /**
     * True if results were requested for username that belongs to write power user (Admin or Mesh Manager)
     */
    isPowerUser: boolean;
  };

export namespace MeshAccessAdvisorByUserListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshAccessAdvisorByUserListWebResponseModel';
}
