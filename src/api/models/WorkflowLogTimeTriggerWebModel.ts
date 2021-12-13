/* eslint-disable */

import type { WorkflowLogNodeWebModelBase } from './WorkflowLogNodeWebModelBase';

export type WorkflowLogTimeTriggerWebModel = WorkflowLogNodeWebModelBase & {
  /**
   * Indicates the trigger was scheduled
   */
  scheduledTime: string;
};

export namespace WorkflowLogTimeTriggerWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowLogTimeTriggerWebModel';
}
