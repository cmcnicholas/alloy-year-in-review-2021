/* eslint-disable */

import type { BulkActionWebModel } from './BulkActionWebModel';
import type { TaskWebModel } from './TaskWebModel';

/**
 * Response model for bulk action
 */
export type GetBulkActionWebResponseModel = {
  /**
   * The bulk action
   */
  bulkAction: BulkActionWebModel;
  /**
   * The task
   */
  task: TaskWebModel;
};

export namespace GetBulkActionWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'GetBulkActionWebResponseModel';
}
