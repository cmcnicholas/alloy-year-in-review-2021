/* eslint-disable */

/**
 * Base model for workflow action parameter definitions
 */
export type WorkflowActionParameterValueWebModelBase = {
  discriminator: string;
};

export namespace WorkflowActionParameterValueWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionParameterValueWebModelBase';
}
