/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfBasemapAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfBasemapAccessAdvisorWebModel';

export type BasemapAccessAdvisorByRoleListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfBasemapAccessAdvisorWebModel & {
    /**
     * True if results were requested for role that includes power groups (Admin or Basemap Manager)
     */
    isPowerRole: boolean;
  };

export namespace BasemapAccessAdvisorByRoleListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapAccessAdvisorByRoleListWebResponseModel';
}
