/* eslint-disable */

/**
 * Web model for Workflow operation summary
 */
export type WorkflowOperationsSummaryWebModel = {
  /**
   * If true, the current user has permissions to edit this Workflow
   */
  canWrite: boolean;
  /**
   * If true, the current user has permissions to delete this Workflow
   */
  canDelete: boolean;
};

export namespace WorkflowOperationsSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowOperationsSummaryWebModel';
}
