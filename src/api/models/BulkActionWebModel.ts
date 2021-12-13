/* eslint-disable */

/**
 * Model for a bulk action
 */
export type BulkActionWebModel = {
  /**
   * The id of the bulk action
   */
  id: string;
  /**
   * The current position of operation the bulk action is at
   */
  position: number;
  /**
   * The number of failures in the bulk action
   */
  failed: number;
  /**
   * Total operations in the bulk action
   */
  total: number;
  /**
   * The background task id useful to retrieve progress
   */
  taskId: string;
};

export namespace BulkActionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BulkActionWebModel';
}
