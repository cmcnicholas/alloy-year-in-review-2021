/* eslint-disable */

import type { WorkflowActionGroupWithOperationsSummaryWebResponseModel } from './WorkflowActionGroupWithOperationsSummaryWebResponseModel';
import type { WorkflowActionWebModel } from './WorkflowActionWebModel';

/**
 * Web model for a workflow action group action related response
 */
export type WorkflowActionGroupEditActionWebResponseModel = {
  /**
   * The workflow action group
   */
  workflowActionGroupWithOperationsSummary: WorkflowActionGroupWithOperationsSummaryWebResponseModel;
  /**
   * The first actions to follow the firing of the trigger on the workflow action group
   */
  actions: Array<WorkflowActionWebModel>;
};

export namespace WorkflowActionGroupEditActionWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupEditActionWebResponseModel';
}
