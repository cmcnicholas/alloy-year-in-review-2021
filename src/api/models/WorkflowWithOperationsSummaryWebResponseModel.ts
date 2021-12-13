/* eslint-disable */

import type { WorkflowOperationsSummaryWebModel } from './WorkflowOperationsSummaryWebModel';
import type { WorkflowWebModel } from './WorkflowWebModel';

/**
 * Web model for a Workflow
 */
export type WorkflowWithOperationsSummaryWebResponseModel = {
  /**
   * The Workflow returned as a result
   */
  workflow: WorkflowWebModel;
  /**
   * The summary of the UAC operations allowed for this Workflow
   */
  operationsSummary: WorkflowOperationsSummaryWebModel;
};

export namespace WorkflowWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowWithOperationsSummaryWebResponseModel';
}
