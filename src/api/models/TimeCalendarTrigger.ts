/* eslint-disable */

import type { WorkflowTriggerWebModelBase } from './WorkflowTriggerWebModelBase';

export type TimeCalendarTrigger = WorkflowTriggerWebModelBase & {
  /**
   * Fixed points in time to trigger on
   */
  dates: Array<string>;
};

export namespace TimeCalendarTrigger {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'TimeCalendarTrigger';
}
