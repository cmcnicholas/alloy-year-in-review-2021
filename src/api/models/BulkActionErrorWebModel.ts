/* eslint-disable */

/**
 * Model for bulk action error element
 */
export type BulkActionErrorWebModel = {
  /**
   * Corresponding item id of the failure, null if it was a failed create operation
   */
  id: string;
  /**
   * Type of the error
   */
  type: string;
  /**
   * Message of the error
   */
  message: string;
};

export namespace BulkActionErrorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BulkActionErrorWebModel';
}
