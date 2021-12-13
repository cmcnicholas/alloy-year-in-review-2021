/* eslint-disable */

import type { CalendarOfUnit } from './CalendarOfUnit';

/**
 * Model representing the optional conditions on the days to repeat on
 */
export type WorkflowTimeCronTriggerOnDaysWebModel = {
  /**
   * The days to repeat of
   */
  days: Array<number>;
  /**
   * The type of days to repeat on
   */
  of: CalendarOfUnit;
};

export namespace WorkflowTimeCronTriggerOnDaysWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowTimeCronTriggerOnDaysWebModel';
}
