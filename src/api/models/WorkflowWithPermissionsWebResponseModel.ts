/* eslint-disable */

import type { WorkflowOperationsSummaryWebModel } from './WorkflowOperationsSummaryWebModel';
import type { WorkflowPermissionResponseWebModel } from './WorkflowPermissionResponseWebModel';
import type { WorkflowWebModel } from './WorkflowWebModel';

/**
 * Web model for a Workflow
 */
export type WorkflowWithPermissionsWebResponseModel = {
  /**
   * The Workflow returned as a result
   */
  workflow: WorkflowWebModel;
  /**
   * The summary of the UAC operations allowed for this Workflow
   */
  operationsSummary: WorkflowOperationsSummaryWebModel;
  /**
   * The user groups associated to this workflow
   */
  permissions: Array<WorkflowPermissionResponseWebModel>;
};

export namespace WorkflowWithPermissionsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowWithPermissionsWebResponseModel';
}
