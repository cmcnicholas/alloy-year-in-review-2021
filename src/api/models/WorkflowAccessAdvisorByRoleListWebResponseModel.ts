/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfWorkflowAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfWorkflowAccessAdvisorWebModel';

export type WorkflowAccessAdvisorByRoleListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfWorkflowAccessAdvisorWebModel & {
    /**
     * True if results were requested for username that belongs to write power user (Admin or Workflow Manager)
     */
    isPowerRole: boolean;
  };

export namespace WorkflowAccessAdvisorByRoleListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowAccessAdvisorByRoleListWebResponseModel';
}
