/* eslint-disable */

import type { WorkflowActionWebModel } from './WorkflowActionWebModel';
import type { WorkflowWithOperationsSummaryWebResponseModel } from './WorkflowWithOperationsSummaryWebResponseModel';

/**
 * Web response model for a Workflow get operation
 */
export type WorkflowGetWebResponseModel = {
  /**
   * The workflow web model
   */
  workflow: WorkflowWithOperationsSummaryWebResponseModel;
  /**
   * The first actions to follow the firing of the trigger on the workflow
   */
  actions: Array<WorkflowActionWebModel>;
};

export namespace WorkflowGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowGetWebResponseModel';
}
