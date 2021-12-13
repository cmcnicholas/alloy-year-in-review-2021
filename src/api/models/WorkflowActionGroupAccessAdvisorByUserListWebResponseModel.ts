/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupAccessAdvisorWebModel';

export type WorkflowActionGroupAccessAdvisorByUserListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupAccessAdvisorWebModel & {
    /**
     * True if results were requested for username that belongs to write power user (Admin or workflow action group Manager)
     */
    isPowerUser: boolean;
  };

export namespace WorkflowActionGroupAccessAdvisorByUserListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupAccessAdvisorByUserListWebResponseModel';
}
