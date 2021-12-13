/* eslint-disable */

import type { WorkflowTriggerWebModelBase } from './WorkflowTriggerWebModelBase';

export type ManualTrigger = WorkflowTriggerWebModelBase & {
  /**
   * If specified, this will be the output dodi of the trigger
   */
  dodiCode?: string | null;
};

export namespace ManualTrigger {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ManualTrigger';
}
