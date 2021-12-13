/* eslint-disable */

/**
 * Web model for workflow action group operation summary
 */
export type WorkflowActionGroupOperationsSummaryWebModel = {
  /**
   * If true, the current user has permissions to edit this workflow action group
   */
  canWrite: boolean;
  /**
   * If true, the current user has permissions to delete this workflow action group
   */
  canDelete: boolean;
};

export namespace WorkflowActionGroupOperationsSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupOperationsSummaryWebModel';
}
