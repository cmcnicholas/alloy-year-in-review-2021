/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfWorkflowAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfWorkflowAccessAdvisorWebModel';

export type WorkflowAccessAdvisorByUserListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfWorkflowAccessAdvisorWebModel & {
    /**
     * True if results were requested for username that belongs to write power user (Admin or Workflow Manager)
     */
    isPowerUser: boolean;
  };

export namespace WorkflowAccessAdvisorByUserListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowAccessAdvisorByUserListWebResponseModel';
}
