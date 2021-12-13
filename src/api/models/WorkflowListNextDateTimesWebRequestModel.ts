/* eslint-disable */

/**
 * Web request model for a Workflow list next dates operation
 */
export type WorkflowListNextDateTimesWebRequestModel = {
  /**
   * The codes of the workflow to return the next dates for
   */
  workflowCodes: Array<string>;
  /**
   * The number of dates to return
   */
  count: number;
};

export namespace WorkflowListNextDateTimesWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowListNextDateTimesWebRequestModel';
}
