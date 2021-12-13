/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfLayerAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfLayerAccessAdvisorWebModel';

export type LayerAccessAdvisorByRoleListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfLayerAccessAdvisorWebModel & {
    /**
     * True if results were requested for role with power groups (Admin or Layer Manager)
     */
    isPowerRole: boolean;
  };

export namespace LayerAccessAdvisorByRoleListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerAccessAdvisorByRoleListWebResponseModel';
}
