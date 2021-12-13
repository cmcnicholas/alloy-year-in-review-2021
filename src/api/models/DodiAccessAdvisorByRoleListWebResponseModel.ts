/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfDodiAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfDodiAccessAdvisorWebModel';

export type DodiAccessAdvisorByRoleListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfDodiAccessAdvisorWebModel & {
    /**
     * True if results were requested for role that contains power groups (Admin or Design Manager)
     */
    isPowerRole: boolean;
  };

export namespace DodiAccessAdvisorByRoleListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAccessAdvisorByRoleListWebResponseModel';
}
