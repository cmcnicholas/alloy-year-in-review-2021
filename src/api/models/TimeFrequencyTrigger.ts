/* eslint-disable */

import type { TimeIntervalUnit } from './TimeIntervalUnit';
import type { WorkflowTriggerWebModelBase } from './WorkflowTriggerWebModelBase';

export type TimeFrequencyTrigger = WorkflowTriggerWebModelBase & {
  /**
   * The number of Units between each event
   */
  interval: number;
  /**
   * The units described by the Interval property
   */
  units: TimeIntervalUnit;
  /**
   * The point in time the frequent starts repeating from
   */
  start: string;
};

export namespace TimeFrequencyTrigger {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'TimeFrequencyTrigger';
}
