/* eslint-disable */

import type { AlloyExceptionWebModel } from './AlloyExceptionWebModel';
import type { BackgroundTaskStatus } from './BackgroundTaskStatus';
import type { BackgroundTaskType } from './BackgroundTaskType';
import type { TaskProcessStateWebModel } from './TaskProcessStateWebModel';

/**
 * Model for an alloy task
 */
export type TaskWebModel = {
  /**
   * When the task was created
   */
  createdDate: string;
  /**
   * When the task was last updated, if known
   */
  lastUpdatedDate?: string | null;
  /**
   * Username that created the task
   */
  createdUserUsername: string;
  /**
   * Type of task
   */
  type: BackgroundTaskType;
  /**
   * Status of the task
   */
  status: BackgroundTaskStatus;
  /**
   * If the task has failed, the associated error
   */
  error?: AlloyExceptionWebModel | null;
  /**
   * Any message associated with the status of the task
   */
  statusMessage: string;
  /**
   * Current state of the task
   */
  processState: TaskProcessStateWebModel;
};

export namespace TaskWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'TaskWebModel';
}
