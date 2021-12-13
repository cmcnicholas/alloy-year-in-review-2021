/* eslint-disable */

/**
 * Web model for item form operation summary
 */
export type ItemFormOperationsSummaryWebModel = {
  /**
   * If true, the current user has permission to edit this item form
   */
  canWrite: boolean;
  /**
   * If true, the current user has permissions to delete this item form
   */
  canDelete: boolean;
};

export namespace ItemFormOperationsSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormOperationsSummaryWebModel';
}
