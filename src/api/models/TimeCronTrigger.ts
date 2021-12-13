/* eslint-disable */

import type { WorkflowTimeCronTriggerOnDaysWebModel } from './WorkflowTimeCronTriggerOnDaysWebModel';
import type { WorkflowTriggerWebModelBase } from './WorkflowTriggerWebModelBase';

export type TimeCronTrigger = WorkflowTriggerWebModelBase & {
  /**
   * Minute of the day to trigger on, in the customer's time zone
   */
  minute: number;
  /**
   * Hour of the day to trigger on, in the customer's time zone
   */
  hour: number;
  /**
   * Optional model specifying which days to repeat on.
   * If not specified, will repeat every day.
   */
  on?: WorkflowTimeCronTriggerOnDaysWebModel | null;
};

export namespace TimeCronTrigger {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'TimeCronTrigger';
}
