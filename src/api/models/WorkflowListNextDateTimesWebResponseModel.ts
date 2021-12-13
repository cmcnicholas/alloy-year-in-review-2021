/* eslint-disable */

/**
 * Web model for a workflow list next trigger dates response
 */
export type WorkflowListNextDateTimesWebResponseModel = {
  /**
   * The Workflow action
   */
  dates: Array<string>;
};

export namespace WorkflowListNextDateTimesWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowListNextDateTimesWebResponseModel';
}
