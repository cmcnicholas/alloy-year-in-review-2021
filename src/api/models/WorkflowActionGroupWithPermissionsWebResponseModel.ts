/* eslint-disable */

import type { WorkflowActionGroupOperationsSummaryWebModel } from './WorkflowActionGroupOperationsSummaryWebModel';
import type { WorkflowActionGroupPermissionResponseWebModel } from './WorkflowActionGroupPermissionResponseWebModel';
import type { WorkflowActionGroupWebModel } from './WorkflowActionGroupWebModel';

/**
 * Web model for a Workflow
 */
export type WorkflowActionGroupWithPermissionsWebResponseModel = {
  /**
   * The Workflow returned as a result
   */
  workflowActionGroup: WorkflowActionGroupWebModel;
  /**
   * The summary of the UAC operations allowed for this Workflow
   */
  operationsSummary: WorkflowActionGroupOperationsSummaryWebModel;
  /**
   * The user groups associated to this workflow
   */
  permissions: Array<WorkflowActionGroupPermissionResponseWebModel>;
};

export namespace WorkflowActionGroupWithPermissionsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupWithPermissionsWebResponseModel';
}
