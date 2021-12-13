/* eslint-disable */

/**
 * Response model for submitted bulk actions
 */
export type BulkActionSubmittedWebResponseModel = {
  /**
   * Code of the bulk action
   */
  bulkActionId: string;
};

export namespace BulkActionSubmittedWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BulkActionSubmittedWebResponseModel';
}
