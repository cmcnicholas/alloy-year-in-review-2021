/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfLayerAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfLayerAccessAdvisorWebModel';

export type LayerAccessAdvisorByUserListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfLayerAccessAdvisorWebModel & {
    /**
     * True if results were requested for username that belongs to write power user (Admin or Layer Manager)
     */
    isPowerUser: boolean;
  };

export namespace LayerAccessAdvisorByUserListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerAccessAdvisorByUserListWebResponseModel';
}
