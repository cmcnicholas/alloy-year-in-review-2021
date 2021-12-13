/* eslint-disable */

import type { DateTimeRangeWebModel } from './DateTimeRangeWebModel';
import type { WorkingDaysTimeConditionType } from './WorkingDaysTimeConditionType';

/**
 * Model representing a temporal precondition on workflow being triggered
 */
export type WorkflowTimeConditionWebModel = {
  /**
   * Optional condition if the workflow should trigger on working days (true) or non-working days (false)
   */
  workingDaysTimeConditionType?: WorkingDaysTimeConditionType;
  /**
   * Any dateTime ranges, in UTC, for when the workflow should not trigger
   */
  exceptions?: Array<DateTimeRangeWebModel> | null;
};

export namespace WorkflowTimeConditionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowTimeConditionWebModel';
}
