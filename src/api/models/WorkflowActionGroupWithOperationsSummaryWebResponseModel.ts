/* eslint-disable */

import type { WorkflowActionGroupOperationsSummaryWebModel } from './WorkflowActionGroupOperationsSummaryWebModel';
import type { WorkflowActionGroupWebModel } from './WorkflowActionGroupWebModel';

/**
 * Web model for a workflow action group
 */
export type WorkflowActionGroupWithOperationsSummaryWebResponseModel = {
  /**
   * The workflow action group returned as a result
   */
  workflowActionGroup: WorkflowActionGroupWebModel;
  /**
   * The summary of the UAC operations allowed for this workflow action group
   */
  operationsSummary: WorkflowActionGroupOperationsSummaryWebModel;
};

export namespace WorkflowActionGroupWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupWithOperationsSummaryWebResponseModel';
}
