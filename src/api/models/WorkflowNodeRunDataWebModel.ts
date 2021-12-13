/* eslint-disable */

/**
 * Model for a set of data associated with a workflow step
 */
export type WorkflowNodeRunDataWebModel = {
  /**
   * The ids of the items
   */
  itemIds?: Array<string> | null;
  /**
   * If true, this action stopped the workflow actions chain it was on and no sequent action on that chain
   * was thus executed
   */
  stopChain: boolean;
};

export namespace WorkflowNodeRunDataWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowNodeRunDataWebModel';
}
