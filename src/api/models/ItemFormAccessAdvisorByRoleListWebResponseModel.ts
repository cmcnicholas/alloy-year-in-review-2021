/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfItemFormAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfItemFormAccessAdvisorWebModel';

export type ItemFormAccessAdvisorByRoleListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfItemFormAccessAdvisorWebModel & {
    /**
     * True if results were requested for role that contains power groups (Admin or Designs Manager)
     */
    isPowerRole: boolean;
  };

export namespace ItemFormAccessAdvisorByRoleListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormAccessAdvisorByRoleListWebResponseModel';
}
