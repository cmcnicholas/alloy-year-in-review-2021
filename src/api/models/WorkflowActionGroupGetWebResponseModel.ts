/* eslint-disable */

import type { WorkflowActionGroupWithOperationsSummaryWebResponseModel } from './WorkflowActionGroupWithOperationsSummaryWebResponseModel';
import type { WorkflowActionWebModel } from './WorkflowActionWebModel';

/**
 * Web response model for a workflow action group get operation
 */
export type WorkflowActionGroupGetWebResponseModel = {
  /**
   * The workflow action group web model
   */
  workflowActionGroup: WorkflowActionGroupWithOperationsSummaryWebResponseModel;
  /**
   * The first actions to follow the firing of the trigger on the workflow action group
   */
  actions: Array<WorkflowActionWebModel>;
};

export namespace WorkflowActionGroupGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupGetWebResponseModel';
}
