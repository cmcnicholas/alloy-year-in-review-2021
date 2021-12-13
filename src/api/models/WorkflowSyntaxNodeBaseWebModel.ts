/* eslint-disable */

/**
 * Base model for all syntax nodes that can be used to represent workflow variables and computed parameters
 */
export type WorkflowSyntaxNodeBaseWebModel = {
  discriminator: string;
};

export namespace WorkflowSyntaxNodeBaseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowSyntaxNodeBaseWebModel';
}
