/* eslint-disable */

/**
 * Web request model for a Workflow clone operation
 */
export type WorkflowCloneWebRequestModel = {
  /**
   * The name of the workflow
   */
  cloneName: string;
};

export namespace WorkflowCloneWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowCloneWebRequestModel';
}
