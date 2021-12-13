/* eslint-disable */

/**
 * Base class for models representing workflow triggering conditions
 */
export type WorkflowTriggerWebModelBase = {
  discriminator: string;
};

export namespace WorkflowTriggerWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowTriggerWebModelBase';
}
