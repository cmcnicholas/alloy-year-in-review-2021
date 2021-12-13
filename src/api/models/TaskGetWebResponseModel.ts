/* eslint-disable */

import type { TaskWebModel } from './TaskWebModel';

/**
 * Web model for a task
 */
export type TaskGetWebResponseModel = {
  /**
   * The retrieved task
   */
  task: TaskWebModel;
};

export namespace TaskGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'TaskGetWebResponseModel';
}
