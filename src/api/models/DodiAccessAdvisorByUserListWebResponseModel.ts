/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfDodiAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfDodiAccessAdvisorWebModel';

export type DodiAccessAdvisorByUserListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfDodiAccessAdvisorWebModel & {
    /**
     * True if results were requested for username that belongs to write power user (Admin or Design Manager)
     */
    isPowerUser: boolean;
  };

export namespace DodiAccessAdvisorByUserListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAccessAdvisorByUserListWebResponseModel';
}
