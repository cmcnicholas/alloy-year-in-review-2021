/* eslint-disable */

/**
 * Web model for a workflow manual run response
 */
export type CreateManualWorkflowRunWebResponseModel = {
  /**
   * The Workflow run Id
   */
  runId: string;
};

export namespace CreateManualWorkflowRunWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CreateManualWorkflowRunWebResponseModel';
}
