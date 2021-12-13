/* eslint-disable */

/**
 * Model for the querying the allowed actions that can be added to a position in a workflow
 */
export type WorkflowGetAllowedActionsWebRequestModel = {
  /**
   * The node this action type would be connected to
   */
  ancestorId: string;
};

export namespace WorkflowGetAllowedActionsWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowGetAllowedActionsWebRequestModel';
}
