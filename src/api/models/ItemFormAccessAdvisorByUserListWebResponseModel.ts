/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfItemFormAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfItemFormAccessAdvisorWebModel';

export type ItemFormAccessAdvisorByUserListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfItemFormAccessAdvisorWebModel & {
    /**
     * True if results were requested for username that belongs to write power user (Admin or Designs Manager)
     */
    isPowerUser: boolean;
  };

export namespace ItemFormAccessAdvisorByUserListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormAccessAdvisorByUserListWebResponseModel';
}
