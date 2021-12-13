/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfBasemapAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfBasemapAccessAdvisorWebModel';

export type BasemapAccessAdvisorByUserListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfBasemapAccessAdvisorWebModel & {
    /**
     * True if results were requested for username that belongs to write power user (Admin or Basemap Manager)
     */
    isPowerUser: boolean;
  };

export namespace BasemapAccessAdvisorByUserListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapAccessAdvisorByUserListWebResponseModel';
}
