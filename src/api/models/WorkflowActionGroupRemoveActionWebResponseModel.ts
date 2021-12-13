/* eslint-disable */

import type { WorkflowActionGroupWithOperationsSummaryWebResponseModel } from './WorkflowActionGroupWithOperationsSummaryWebResponseModel';
import type { WorkflowActionWebModel } from './WorkflowActionWebModel';

/**
 * Web model for a workflow Action Group action related response
 */
export type WorkflowActionGroupRemoveActionWebResponseModel = {
  /**
   * The workflow action group
   */
  workflowActionGroupWithOperationsSummary: WorkflowActionGroupWithOperationsSummaryWebResponseModel;
  /**
   * The first actions to follow the firing of the trigger on the workflow Action Group
   */
  actions: Array<WorkflowActionWebModel>;
};

export namespace WorkflowActionGroupRemoveActionWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupRemoveActionWebResponseModel';
}
