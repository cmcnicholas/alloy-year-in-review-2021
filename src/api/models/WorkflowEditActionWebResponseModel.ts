/* eslint-disable */

import type { WorkflowActionWebModel } from './WorkflowActionWebModel';
import type { WorkflowWithOperationsSummaryWebResponseModel } from './WorkflowWithOperationsSummaryWebResponseModel';

/**
 * Web model for a workflow action related response
 */
export type WorkflowEditActionWebResponseModel = {
  /**
   * The Workflow
   */
  workflowWithOperationsSummary: WorkflowWithOperationsSummaryWebResponseModel;
  /**
   * The first actions to follow the firing of the trigger on the workflow
   */
  actions: Array<WorkflowActionWebModel>;
};

export namespace WorkflowEditActionWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowEditActionWebResponseModel';
}
