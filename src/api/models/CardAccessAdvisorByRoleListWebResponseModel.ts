/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfCardAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfCardAccessAdvisorWebModel';

export type CardAccessAdvisorByRoleListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfCardAccessAdvisorWebModel & {
    /**
     * True if results were requested for role that contains power groups (Admin or Card Manager)
     */
    isPowerRole: boolean;
  };

export namespace CardAccessAdvisorByRoleListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardAccessAdvisorByRoleListWebResponseModel';
}
