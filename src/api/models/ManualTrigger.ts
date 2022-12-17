/* eslint-disable */

import type { WorkflowManualTriggerOutputMode } from './WorkflowManualTriggerOutputMode';
import type { WorkflowTriggerWebModelBase } from './WorkflowTriggerWebModelBase';

export type ManualTrigger = WorkflowTriggerWebModelBase & {
  /**
   * If specified, this will be the output dodi of the trigger
   */
  dodiCode?: string | null;
  /**
   * Specifies the behaviour when triggered against multiple items
   */
  outputMode?: WorkflowManualTriggerOutputMode | null;
};

export namespace ManualTrigger {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ManualTrigger';
}
