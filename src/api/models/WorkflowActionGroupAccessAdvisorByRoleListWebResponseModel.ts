/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupAccessAdvisorWebModel } from './PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupAccessAdvisorWebModel';

export type WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupAccessAdvisorWebModel & {
    /**
     * True if results were requested for role that contain power groups (Admin or workflow action group Manager)
     */
    isPowerRole: boolean;
  };

export namespace WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel';
}
