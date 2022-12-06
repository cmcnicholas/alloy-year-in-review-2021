/* eslint-disable */

/**
 * Web model for dodi item log retention period setting
 */
export type DodiItemLogsRetentionDaysWebModel = {
  /**
   * Time in days up to which which item logs of this design will be retained
   */
  value: number;
  /**
   * The parent dodi Guc, i.e. the dodi that defines this ItemLogsRetentionDays
   */
  parent: string;
};

export namespace DodiItemLogsRetentionDaysWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiItemLogsRetentionDaysWebModel';
}
