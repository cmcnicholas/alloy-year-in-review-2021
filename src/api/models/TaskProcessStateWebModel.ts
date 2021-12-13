/* eslint-disable */

/**
 * Model for an alloy task info process state
 */
export type TaskProcessStateWebModel = {
  /**
   * The last progress message reported by the task
   */
  message?: string | null;
  /**
   * Number of items or operations processed so far by the task
   */
  processed: number;
  /**
   * Total number of items or operations expected to be processed by the task
   */
  total: number;
  /**
   * The average processed rate of the task since it started (optional)
   */
  averageOperationsPerSecond?: number | null;
};

export namespace TaskProcessStateWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'TaskProcessStateWebModel';
}
