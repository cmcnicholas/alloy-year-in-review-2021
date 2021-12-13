/* eslint-disable */

/**
 * Model for the identity of a step taken in a workflow
 */
export type WorkflowLogNodeInfoWebModel = {
  /**
   * The type of the node that is being logged against
   */
  nodeCode: string;
  /**
   * The id of the node within the workflow run
   */
  nodeId: string;
  /**
   * The NodeId of the triggering (prior) node
   */
  ancestorNodeId?: string | null;
};

export namespace WorkflowLogNodeInfoWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowLogNodeInfoWebModel';
}
