/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfCardAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfCardAccessAdvisorWebModel';

export type CardAccessAdvisorByUserListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfCardAccessAdvisorWebModel & {
    /**
     * True if results were requested for username that belongs to write power user (Admin or Card Manager)
     */
    isPowerUser: boolean;
  };

export namespace CardAccessAdvisorByUserListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardAccessAdvisorByUserListWebResponseModel';
}
