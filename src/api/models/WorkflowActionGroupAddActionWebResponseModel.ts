/* eslint-disable */

import type { WorkflowActionGroupWithOperationsSummaryWebResponseModel } from './WorkflowActionGroupWithOperationsSummaryWebResponseModel';
import type { WorkflowActionWebModel } from './WorkflowActionWebModel';

/**
 * Web model for a workflow Action Group action related response
 */
export type WorkflowActionGroupAddActionWebResponseModel = {
  /**
   * The workflow action group
   */
  workflowActionGroupWithOperationsSummary: WorkflowActionGroupWithOperationsSummaryWebResponseModel;
  /**
   * The first actions to follow the firing of the trigger on the workflow Action Group
   */
  actions: Array<WorkflowActionWebModel>;
  /**
   * The id of the action that was added
   */
  actionId: string;
};

export namespace WorkflowActionGroupAddActionWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupAddActionWebResponseModel';
}
